/**
 * Central referral catalog for Via Fidelitatis.
 * getReferral() rotates by day + slot so the same page isn't stuck on one offer,
 * and different slots (header vs card) usually show different tools the same day.
 */

export const REFERRALS = [
  {
    id: 'robinhood',
    categories: ['investing'],
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
    id: 'amex-bbc',
    categories: ['investing', 'household'],
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
    id: 'marriott-bonvoy',
    categories: ['investing', 'household'],
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
    id: 'mercari',
    categories: ['savings', 'household'],
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
    id: 'oura',
    categories: ['household'],
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
    id: 'monarch',
    categories: ['budgeting', 'household'],
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
    id: 'surfshark',
    categories: ['privacy'],
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
    stripHeadline: 'Up to 58% off data removal',
    stripSub: ' — pull your family off broker sites',
    stripCta: 'Get Incogni deal',
    cardEyebrow: 'Protect time and peace',
    cardBody:
      'Incogni removes personal info from 420+ data brokers and keeps at it when data reappears. Friends pricing via this link; family plans cover up to 5.',
    cardCta: 'Get Incogni at friends pricing',
    href: 'https://incogni.cello.so/C622q7UjoeJ',
  },
  {
    id: 'mintmobile',
    categories: ['savings', 'household'],
    stripHeadline: '$15 Mint Mobile credit',
    stripSub: ' — free up monthly cash for FI and family',
    stripCta: 'Switch & save',
    cardEyebrow: 'Cut a recurring bill',
    cardBody:
      'Mint Mobile offers simple prepaid plans on a major network. Use this link for $15 renewal credit, then put the ongoing savings toward investing or tithing.',
    cardCta: 'Get $15 Mint credit',
    href: 'https://my.mintmobile.com/refer/n5SgKMM',
  },
];

function dayOfYear(d = new Date()) {
  const start = new Date(d.getFullYear(), 0, 0);
  return Math.floor((d - start) / 86400000);
}

/**
 * @param {{ slot?: number, pool?: 'all' | 'investing' | 'household' | 'privacy' | 'giving' }} opts
 */
export function getReferral({ slot = 0, pool = 'all' } = {}) {
  let list = REFERRALS;
  if (pool !== 'all') {
    list = REFERRALS.filter((r) => r.categories.includes(pool));
  }
  if (list.length === 0) list = REFERRALS;
  const idx = (dayOfYear() + slot) % list.length;
  return list[idx];
}

/** Always export Robinhood for any legacy import sites. */
export const ROBINHOOD_URL = 'https://join.robinhood.com/dustinh-1bff5a';
