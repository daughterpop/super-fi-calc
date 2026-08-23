/**
 * Central referral catalog for Via Fidelitatis.
 * getReferral() rotates by day + slot so the same page isn't stuck on one offer,
 * and different slots (header vs card) usually show different tools the same day.
 *
 * Banner strip rotates a tight set of high-fit offers:
 * Robinhood, Wealthfront, Monarch, Daffy, Thrive Market, Catholic Company.
 * Cards, shopping, health, privacy, and other tools live on the Tools page.
 */

export const REFERRALS = [
  {
    id: 'robinhood',
    categories: ['investing'],
    inBanner: true,
    stripHeadline: 'Free stocks up to $200',
    stripSub: ' — start investing your surplus toward FI',
    stripCta: 'Claim free stock',
    cardEyebrow: 'Put the plan to work',
    cardBody:
      'Once you know your surplus, invest it. Open a Robinhood account and get free stocks worth up to $200 when you fund it.',
    cardCta: 'Claim free stock',
    href: 'https://join.robinhood.com/dustinh-1bff5a',
  },
  {
    id: 'wealthfront',
    categories: ['investing'],
    inBanner: true,
    stripHeadline: 'APY boost + deposit match',
    stripSub: ' — automate investing and high-yield cash toward FI',
    stripCta: 'Get Wealthfront bonus',
    cardEyebrow: 'Automate the surplus',
    cardBody:
      'Wealthfront pairs automated investing with a high-yield Cash Account. Referral perks can include a temporary APY boost and investing deposit match.',
    cardCta: 'Claim Wealthfront offer',
    href: 'https://www.wealthfront.com/c/affiliates/invited/AFFD-AL7T-QSBZ-J0Q8',
  },
  {
    id: 'kalshi',
    categories: ['investing'],
    inBanner: false,
    stripHeadline: 'Kalshi trading credit',
    stripSub: ' — event contracts; bonus after you trade ~$25',
    stripCta: 'Sign up via referral',
    cardEyebrow: 'Trade on real-world events',
    cardBody:
      'Kalshi is a CFTC-regulated exchange for event contracts (elections, economics, weather, and more). Sign up through this referral link; new users who complete a small qualifying trade often unlock a trading credit (amount varies — sometimes advertised up to $500).',
    cardCta: 'Join Kalshi',
    href: 'https://kalshi.com/sign-up/?referral=4a67c61f-1958-4a0a-a02c-18aa478ef653&m=true&utm_source=mobile_app&utm_medium=copy&utm_campaign=referral&utm_content=referral_qr_sheet',
  },
  {
    id: 'amex-bbc',
    categories: ['investing', 'household'],
    inBanner: false,
    stripHeadline: '$250 after $5k spend',
    stripSub: ' — Blue Business Cash, no annual fee',
    stripCta: 'Apply via referral',
    cardEyebrow: 'Put spend to work',
    cardBody:
      'Amex Blue Business Cash: $250 statement credit after $5,000 in qualifying purchases within the first 6 months, plus 2% cash back on the first $50k each year (then 1%). No annual fee. Apply through this link and we can both earn rewards if you\'re approved.',
    cardCta: 'Apply for Blue Business Cash',
    href: 'https://americanexpress.com/en-us/referral/bluebusinesscash-credit-card?ref=DUSTIHtvYM&XL=MIMNS',
  },
  {
    id: 'chase-sapphire',
    categories: ['investing', 'household'],
    inBanner: false,
    stripHeadline: '100k Chase Ultimate Rewards',
    stripSub: ' — Sapphire Reserve or Preferred after qualifying spend',
    stripCta: 'Choose a Sapphire card',
    cardEyebrow: 'Premium travel rewards',
    cardBody:
      'Chase Sapphire Reserve or Sapphire Preferred: earn 100,000 bonus Ultimate Rewards points when you meet the welcome offer on either card through this referral. Strong travel and everyday value for families building FI margin. Apply here and we can both be rewarded if you\'re approved.',
    cardCta: 'Apply for Sapphire Reserve or Preferred',
    href: 'https://www.referyourchasecard.com/19x/RO2CCHE1LT',
  },
  {
    id: 'amazon-visa',
    categories: ['investing', 'household'],
    inBanner: false,
    stripHeadline: 'Amazon gift card on approval',
    stripSub: ' — Amazon Visa, rewards on Amazon & everyday spend',
    stripCta: 'Apply for Amazon Visa',
    cardEyebrow: 'Everyday Amazon spend',
    cardBody:
      'Amazon Visa (Chase): get an Amazon Gift Card instantly upon approval. Strong rewards at Amazon, Whole Foods, and everyday categories. Apply through this link and we can both benefit if you\'re approved.',
    cardCta: 'Apply for Amazon Visa',
    href: 'https://www.amazon.com/dp/BT00LN946S?externalReferenceId=c404395c-ab3c-4b14-b637-54046a347ee6',
  },
  {
    id: 'marriott-bonvoy',
    categories: ['investing', 'household'],
    inBanner: false,
    stripHeadline: '125k pts + free night',
    stripSub: ' — Marriott Bonvoy Boundless after $3k spend',
    stripCta: 'Choose a card',
    cardEyebrow: 'Travel rewards for the family',
    cardBody:
      'Chase Marriott Bonvoy cards: Boundless offers 125,000 bonus points + a Free Night Award (up to 50k pts) after $3,000 spend in 3 months. Bold is $0 annual fee with 60k points. Pick the card that fits — we both earn if you\'re approved.',
    cardCta: 'Apply for Marriott Bonvoy',
    href: 'https://www.referyourchasecard.com/252v/4CYRWB2LIZ',
  },
  {
    id: 'rakuten-amex',
    categories: ['investing', 'household'],
    inBanner: false,
    stripHeadline: 'Rakuten Amex Card',
    stripSub: ' — no annual fee + extra cash back on Rakuten shops',
    stripCta: 'Apply via referral',
    cardEyebrow: 'Stack portal + card cash back',
    cardBody:
      'Rakuten Rewards American Express Card: no annual fee, plus extra cash back when you shop through Rakuten (stacks with the portal). Apply through this referral link — if you\'re approved, we can both benefit.',
    cardCta: 'Apply for Rakuten Amex',
    href: 'https://r.imprint.co/qTwhQA',
  },
  {
    id: 'gemini-cc',
    categories: ['investing', 'household'],
    inBanner: false,
    stripHeadline: 'Extra $50 in crypto',
    stripSub: ' — Gemini Credit Card, earn up to 4% back in crypto',
    stripCta: 'Apply via referral',
    cardEyebrow: 'Earn crypto while you spend',
    cardBody:
      'Gemini Credit Card: no annual fee, earn up to 4% back in bitcoin or 50+ other cryptos on gas/EV/transit (up to $300/mo), 3% dining, 2% groceries, 1% everything else. Use this referral link to apply and get an extra $50 in crypto when you\'re approved and make a qualifying purchase in the first billing cycle.',
    cardCta: 'Apply for Gemini Credit Card',
    href: 'https://creditcard.exchange.gemini.com/credit-card/apply?referral_code=jdbeq24gw',
  },
  {
    id: 'gondola',
    categories: ['household', 'savings'],
    inBanner: false,
    stripHeadline: '$50 each after first hotel booking',
    stripSub: ' — Gondola tracks rate drops + cash back',
    stripCta: 'Join Gondola',
    cardEyebrow: 'Smarter hotel booking',
    cardBody:
      'Gondola books hotels, tracks rate drops, and pays extra cash back. Join with this link and we both get $50 after your first booking.',
    cardCta: 'Join Gondola — $50 each',
    href: 'https://gondola.ai/invite/0WGYR4PEY',
  },
  {
    id: 'airbnb-host',
    categories: ['household', 'savings'],
    inBanner: false,
    stripHeadline: '$115 for new Airbnb hosts',
    stripSub: ' — after your first qualifying booking within 180 days',
    stripCta: 'Start hosting',
    cardEyebrow: 'Side income for the household',
    cardBody:
      'Become an Airbnb host through this link and get an extra $115 after your first qualifying booking within 180 days. A practical way to turn a spare room or vacant space into FI cash.',
    cardCta: 'Become an Airbnb host — $115 bonus',
    href: 'https://www.airbnb.com/rp/dustinh15591?p=stay&s=76&unique_share_id=A07C9D7C-DCE9-4CF5-81A0-23108904059F',
  },
  {
    id: 'mercari',
    categories: ['savings', 'household'],
    inBanner: false,
    stripHeadline: 'Up to $20 to start',
    stripSub: ' — buy used deals or sell clutter for FI cash',
    stripCta: 'Join Mercari',
    cardEyebrow: 'Frugal finds & side hustle',
    cardBody:
      'Mercari makes it easy to buy gently used items at a discount or sell what your family no longer needs. Sign up with code DMBTWC and get up to $20 when you get started.',
    cardCta: 'Get up to $20 on Mercari',
    href: 'https://merc.li/MrZD2EDtb',
  },
  {
    id: 'minty',
    categories: ['savings', 'household'],
    inBanner: false,
    stripHeadline: '$10 cashback bonus',
    stripSub: ' — auto coupons + cashback at 30k+ stores',
    stripCta: 'Get $10 on Minty',
    cardEyebrow: 'Shop smarter automatically',
    cardBody:
      'Minty is an AI shopping companion that applies coupons and earns cashback at 30,000+ stores. New users get a $10 cashback bonus when they get started.',
    cardCta: 'Claim $10 Minty bonus',
    href: 'https://www.minty.com/me/1SFMA1',
  },
  {
    id: 'thrive-market',
    categories: ['savings', 'household'],
    inBanner: true,
    stripHeadline: '40% off first order + $40 Thrive Cash',
    stripSub: ' — organic groceries at wholesale prices',
    stripCta: 'Join Thrive Market',
    cardEyebrow: 'Healthy groceries, lower cost',
    cardBody:
      'Thrive Market is a membership grocery store for organic, non-GMO, and sustainable food & household products at wholesale prices. Friends get 40% off their first order; after they stay an annual member for 30+ days you earn $40 Thrive Cash.',
    cardCta: 'Get 40% off first order',
    href: 'http://thrv.me/PxCk1V',
  },
  {
    id: 'catholic-company',
    categories: ['faith', 'household'],
    inBanner: true,
    stripHeadline: '$10 off first $70+ order',
    stripSub: ' — Bibles, books, and sacramentals from The Catholic Company',
    stripCta: 'Shop Catholic Company',
    cardEyebrow: 'Faith formation for the household',
    cardBody:
      'The Catholic Company carries Bibles, prayer books, rosaries, and gifts for the home. New customers get $10 off their first purchase of $70 or more through this referral link.',
    cardCta: 'Get $10 off $70+',
    href: 'https://rwrd.io/ref_O0T1BE2?c',
  },
  {
    id: 'monarch',
    categories: ['budgeting', 'household'],
    inBanner: true,
    stripHeadline: '50% off Monarch Core',
    stripSub: ' — see every dollar in one place with your spouse',
    stripCta: 'Get 50% off',
    cardEyebrow: 'Clarity for the household',
    cardBody:
      'Monarch Money tracks budgets, net worth, and investments together — 50% off your first year of Core through this link.',
    cardCta: 'Get 50% off Monarch',
    href: 'https://monarch.com/referral/hvup58srp1?r_source=share',
  },
  {
    id: 'daffy',
    categories: ['giving'],
    inBanner: true,
    stripHeadline: '$25 for charity on first gift',
    stripSub: ' — build generosity into your FI plan',
    stripCta: 'Join Daffy',
    cardEyebrow: 'Give as you grow',
    cardBody:
      'Daffy is a modern donor-advised fund for everyday families. Join with this invite and get $25 for charity after your first contribution.',
    cardCta: 'Join Daffy — $25 for charity',
    href: 'https://www.daffy.org/dhimmer1/invite',
  },
  {
    id: 'mintmobile',
    categories: ['savings', 'household'],
    inBanner: false,
    stripHeadline: '$15 Mint Mobile credit',
    stripSub: ' — free up monthly cash for FI and family',
    stripCta: 'Switch & save',
    cardEyebrow: 'Cut a recurring bill',
    cardBody:
      'Mint Mobile offers simple prepaid plans on a major network. Use this link for $15 renewal credit, then put the ongoing savings toward investing or tithing.',
    cardCta: 'Get $15 Mint credit',
    href: 'https://my.mintmobile.com/refer/n5SgKMM',
  },
  // --- Health & training (Tools page; not in sitewide banner) ---
  {
    id: 'oura',
    categories: ['health'],
    inBanner: false,
    stripHeadline: '10% off Oura Ring',
    stripSub: ' — track recovery, sleep, and readiness',
    stripCta: 'Get 10% off',
    cardEyebrow: 'Steward body data',
    cardBody:
      'Oura Ring tracks sleep, recovery, and readiness in a comfortable smart ring. Use this referral for 10% off a new ring — useful for triathlon training, recovery, and family health awareness.',
    cardCta: 'Get 10% off Oura Ring',
    href: 'https://ouraring.com/discount/b79278c3ad?utm_source=user&utm_medium=iac_raf&utm_type=alwayson-cvr&utm_campaign=2026RAF&utm_variant=2026_raf_may',
  },
  {
    id: 'form-swim',
    categories: ['health'],
    inBanner: false,
    stripHeadline: 'FORM smart swim goggles',
    stripSub: ' — real-time metrics in the pool for triathlon',
    stripCta: 'Shop FORM',
    cardEyebrow: 'Train smarter in the water',
    cardBody:
      'FORM Smart Swim goggles show pace, distance, stroke rate, and more right in your field of view. Use this referral link for the one-month reward campaign — great for swim technique work and race prep.',
    cardCta: 'Get FORM goggles',
    href: 'https://www.formswim.com/cart/40479402065991:1?attributes[referrerUserId]=019cf7d0-367d-7dd4-ac63-df4fbd8b42a3&attributes[referralCampaign]=one-month-reward',
  },
  {
    id: 'transition',
    categories: ['health'],
    inBanner: false,
    stripHeadline: '1 month free Transition',
    stripSub: ' — AI triathlon coaching for swim, bike, run',
    stripCta: 'Try Transition free',
    cardEyebrow: 'Train for your next race',
    cardBody:
      'Transition is an AI triathlon training app with adaptive swim, bike, and run plans. Use code TRANSITIONVTRTF4 for 1 month free — built for busy age-groupers balancing training with family and work.',
    cardCta: 'Get 1 month free',
    href: 'https://www.transition.fun?ref=TRANSITIONVTRTF4',
  },
  // --- Privacy (Tools page; not in sitewide banner) ---
  {
    id: 'surfshark',
    categories: ['privacy'],
    inBanner: false,
    stripHeadline: 'Up to 3 free months of VPN',
    stripSub: ' — protect the whole household on one plan',
    stripCta: 'Get Surfshark',
    cardEyebrow: 'Steward digital safety',
    cardBody:
      'Surfshark covers unlimited devices — practical for a family. Sign up through this link and get free months added to your plan.',
    cardCta: 'Get Surfshark + free months',
    href: 'https://surfshark.club/friend/sgSt5YqV',
  },
  {
    id: 'incogni',
    categories: ['privacy'],
    inBanner: false,
    stripHeadline: 'Up to 58% off data removal',
    stripSub: ' — pull your family off broker sites',
    cardEyebrow: 'Protect time and peace',
    cardBody:
      'Incogni removes personal info from 420+ data brokers and keeps at it when data reappears. Friends pricing via this link; family plans cover up to 5.',
    cardCta: 'Get Incogni at friends pricing',
    href: 'https://incogni.cello.so/C622q7UjoeJ',
  },
  {
    id: 'proton',
    categories: ['privacy'],
    inBanner: false,
    stripHeadline: '$20 Proton credit each',
    stripSub: ' — private Mail, VPN, Pass, or Drive when they go premium',
    stripCta: 'Try Proton',
    cardEyebrow: 'Privacy that sticks',
    cardBody:
      'Proton offers encrypted Mail, VPN, Pass, Drive, and Unlimited plans. When someone subscribes to a qualifying premium plan through this link, you both get a $20 credit.',
    cardCta: 'Join Proton — $20 credit',
    href: 'https://pr.tn/ref/MFBV7SGM',
  },
];

function dayOfYear(d = new Date()) {
  const start = new Date(d.getFullYear(), 0, 0);
  return Math.floor((d - start) / 86400000);
}

/**
 * @param {{
 *   slot?: number,
 *   pool?: 'all' | 'banner' | 'investing' | 'household' | 'privacy' | 'giving' | 'health' | 'savings' | 'budgeting' | 'faith'
 * }} opts
 */
export function getReferral({ slot = 0, pool = 'all' } = {}) {
  let list = REFERRALS;
  if (pool === 'banner') {
    list = REFERRALS.filter((r) => r.inBanner);
  } else if (pool !== 'all') {
    list = REFERRALS.filter((r) => r.categories.includes(pool));
  }
  if (list.length === 0) list = REFERRALS.filter((r) => r.inBanner);
  if (list.length === 0) list = REFERRALS;
  const idx = (dayOfYear() + slot) % list.length;
  return list[idx];
}

/** Always export Robinhood for any legacy import sites. */
export const ROBINHOOD_URL = 'https://join.robinhood.com/dustinh-1bff5a';
