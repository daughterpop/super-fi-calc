// api/subscribe.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, phone } = req.body;
    const apiKey = process.env.MAILERLITE_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: 'API key not configured' });
    }

    try {
      const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          email,
          fields: { phone },  // Stores phone as custom field for SMS
          opted_in_at: new Date().toISOString(),  // Records opt-in timestamp
          optin_ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,  // IP for compliance
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Subscription failed');
      }

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Subscription error:', error);
      res.status(500).json({ error: 'Failed to subscribe' });
    }
  } else {
    res.status(405).end();
  }
}
