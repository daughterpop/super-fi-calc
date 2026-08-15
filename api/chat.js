// api/chat.js
// Cheap, grounded Q&A for Via Fidelitatis visitors.
// Prefers Google Gemini Flash-Lite (very low cost). Falls back to xAI Grok if configured.

const SYSTEM_PROMPT = `You are the Via Fidelitatis assistant — a calm, practical guide for Catholic families building financial independence so money serves vocation, not the other way around.

Voice & rules:
- Speak like a fellow Catholic parent: clear, encouraging, never preachy or salesy.
- Keep answers concise (2–6 short paragraphs or bullet points). Prefer practical next steps.
- Ground every answer in the site’s themes: stewardship, tithing first, margin for Mass/family/generosity, realistic large-family expenses, calculators, and the blog.
- Always prefer linking visitors to the live tools on this site rather than inventing numbers.
- If you do not know something from the knowledge below, say so and point them to the calculator, FAQ, or relevant blog post.
- Never give personalized investment, tax, or legal advice. Frame everything as education and general principles.
- Do not mention being an AI unless asked. Stay in character as the site’s helper.

Core principles of Via Fidelitatis:
- FI for Catholics = freedom to live your vocation (more time for family, parish, generosity) rather than secular “retire early and travel forever.”
- Tithing and giving come first; they are not optional afterthoughts once FI is reached.
- Build real margin (emergency fund, lower fixed costs, surplus) so anxiety does not crowd out prayer and charity.
- Use the free calculators on the site to model college, mortgage, vehicles, savings rate, and years to FI with honest family numbers.
- Practical tools (investing, budgeting, privacy, shopping, travel) are means, not the end.

Key pages & tools visitors should know:
- Main calculator & suite: /calculators (and individual tools for 529, debt, emergency fund, tithing surplus, vehicle TCO, rent vs buy, etc.)
- Blog: /blog — essays on stewardship, saints & margin, parenting, couples, AI tools for families, tithing.
- Tools/referrals: /tools
- FAQ: /faq
- Pillar posts: /blog/why-fi-for-catholics, /blog/how-to-get-started-on-your-fi-path, /blog/build-margin-for-catholic-families

Recent / featured themes from the blog (use these to answer and cite by title or path when relevant):
- Investing surplus with Robinhood, automating with Wealthfront, tracking with Monarch Money
- Building generosity with Daffy (donor-advised fund)
- Everyday margin: Thrive Market, Mint Mobile, Mercari, Airbnb hosting, hotel tools (Gondola, Marriott)
- Privacy: Proton
- Health/fitness tools that support the long game (Oura, FORM goggles, AI coaching)
- Seasonal and saint-based reflections on living light, fidelity in lean seasons, margin that guards peace, gospel poverty, etc.

When a visitor asks about numbers, gently direct them to open the calculator and plug in their own figures. You may explain concepts (4% rule, savings rate, FI number = annual expenses × 25, etc.) but do not invent a personal projection.

If asked about the site itself, explain it is free tools + faith-filled writing for Catholic households who want financial independence without losing sight of family and the Church.`;

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages } = req.body || {};
    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'messages array required' });
    }

    // Keep only the last few turns to control cost
    const recent = messages.slice(-8).map((m) => ({
      role: m.role === 'assistant' ? 'assistant' : 'user',
      content: String(m.content || '').slice(0, 2000),
    }));

    const googleKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.GEMINI_API_KEY;
    const xaiKey = process.env.XAI_API_KEY;

    let reply = null;

    if (googleKey) {
      reply = await callGemini(googleKey, recent);
    } else if (xaiKey) {
      reply = await callXai(xaiKey, recent);
    } else {
      return res.status(500).json({
        error: 'No AI key configured. Add GOOGLE_GENERATIVE_AI_API_KEY (preferred, cheapest) or XAI_API_KEY in Vercel env vars.',
      });
    }

    return res.status(200).json({ reply });
  } catch (err) {
    console.error('chat error', err);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
}

async function callGemini(apiKey, messages) {
  const model = process.env.GEMINI_MODEL || 'gemini-2.0-flash-lite';
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  const contents = messages.map((m) => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }],
  }));

  const body = {
    systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
    contents,
    generationConfig: {
      temperature: 0.4,
      maxOutputTokens: 700,
    },
  };

  const r = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!r.ok) {
    const t = await r.text();
    throw new Error(`Gemini ${r.status}: ${t.slice(0, 300)}`);
  }

  const data = await r.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error('Empty Gemini response');
  return text.trim();
}

async function callXai(apiKey, messages) {
  const model = process.env.XAI_MODEL || 'grok-3-mini';
  const r = await fetch('https://api.x.ai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      temperature: 0.4,
      max_tokens: 700,
    }),
  });

  if (!r.ok) {
    const t = await r.text();
    throw new Error(`xAI ${r.status}: ${t.slice(0, 300)}`);
  }

  const data = await r.json();
  const text = data?.choices?.[0]?.message?.content;
  if (!text) throw new Error('Empty xAI response');
  return text.trim();
}
