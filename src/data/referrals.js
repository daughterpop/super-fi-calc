/**
 * Central referral catalog for Fidelitas.
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
