export const LANES = [
  {
    id: 'household',
    label: 'Household',
    blurb: 'One money item that actually touches a Catholic family budget this week.',
  },
  {
    id: 'deal',
    label: 'Deal',
    blurb: 'One offer run through the organic-spend test. Manufacture spend and it is not on the path.',
  },
  {
    id: 'fidelity',
    label: 'Fidelity',
    blurb: 'The Sunday readings, applied to surplus — so the Gospel has somewhere to land in the budget.',
  },
];

export const editions = [
  {
    slug: 'take-up-septembers-cross',
    issue: 1,
    date: '2026-08-30',
    sundayLabel: 'Sunday, August 30, 2026',
    title: 'Take up September’s cross',
    lede:
      'The 22nd Sunday in Ordinary Time lands on the doorstep of September. The first of the month is Tuesday. Labor Day ads are already selling a long weekend you did not plan. This week’s surplus is a first-fruits list, a travel offer that is almost certainly a skip, and a Gospel that will not let the household save its life by buying the whole weekend.',
    lanes: [
      {
        lane: 'household',
        kicker: 'September 1 · Tuesday',
        title: 'Write the month’s three claims before Friday’s ads land',
        lede:
          'Rent or mortgage, the school installment, the tithe. If those three are not named by Tuesday, Labor Day will name them for you — as leftovers.',
        body: [
          'September is when the school year stops being a feeling and becomes a cash-flow. Activity fees, lunches, the first sports cycle, and the 1st-of-month housing bill arrive in the same ten days. Labor Day (Monday the 7th) sits on top of that pile and pretends to be rest.',
          'Do the unglamorous thing this afternoon: three lines, in order. The parish. The school you actually chose. The house. Then look at what is left for a weekend, a card bonus, or a sale. If the leftover is thin, the weekend is not a reward. It is a raid.',
          'Some Catholic schools open 2027–28 tuition-assistance portals on September 1. Mark that if you will need aid next year. It does not change this month’s bill. This month still has to clear from wages, not from a 529 panic or a paused tithe.',
        ],
        tool: {
          label: 'Tithing & surplus calculator',
          href: '/calculators/tithing-surplus',
        },
      },
      {
        lane: 'deal',
        kicker: 'Labor Day travel',
        title: 'The long-weekend offer is not a deal if the trip is the offer',
        lede:
          'Hotel points, “free night” cards, and Friday-to-Monday fares will look cheap until you count the weekend you were not going to take.',
        body: [
          'A travel bonus only helps the FI path when the nights were already on the calendar — a wedding, a funeral, grandparents, a trip you had already decided to make. Then the organic-spend test can pass, and only if the statement is paid in full.',
          'Manufacturing a Labor Day getaway to “earn” the bonus is how the household buys a second vocation for a weekend. The points are not surplus. They are the cost of a trip wearing a rewards shirt.',
          'If nothing was booked before this issue, the verdict is skip. There will be another hotel email in October, when the calendar is honest again.',
        ],
        verdict: {
          label: 'Skip',
          note: 'Skip unless the nights were already planned and will be paid in full. A weekend invented for points is not stewardship. It is a sale of September’s float.',
        },
        tool: {
          label: 'Bonus value calculator',
          href: '/calculators/bonus-value',
        },
      },
      {
        lane: 'fidelity',
        kicker: '22nd Sunday in Ordinary Time',
        title: 'Whoever wishes to save his life will lose it',
        lede:
          'Matthew 16:24–26 is the money reading hiding in the Sunday Gospel. Peter wants a Messiah without a cross. The Labor Day inbox wants a household without a first claim.',
        body: [
          '“Whoever wishes to come after me must deny himself, take up his cross, and follow me.” The household cross this week is not theatrics. It is naming Tuesday’s bills and letting Friday’s ads go unanswered. Denial here is specific: the extra night, the extra cart, the extra “we deserve it” that was not in the plan on August 1.',
          'Paul is just as blunt: “Do not conform yourselves to this age, but be transformed by the renewal of your mind.” This age sells rest as spend. The renewal is a short list, written before Mass or after, that keeps the tithe and the school ahead of the weekend.',
          '“What profit would there be for one to gain the whole world and forfeit his life?” A long weekend can be holy. A long weekend that forfeits September’s first-fruits is just the world, with a lake photo.',
        ],
        tool: {
          label: 'FI path calculator',
          href: '/calculators/fi-path',
        },
      },
    ],
  },
];

export function getEdition(slug) {
  return editions.find((e) => e.slug === slug);
}

export function latestEdition() {
  return [...editions].sort((a, b) => b.date.localeCompare(a.date))[0];
}

export function adjacentEditions(slug) {
  const ordered = [...editions].sort((a, b) => b.date.localeCompare(a.date));
  const i = ordered.findIndex((e) => e.slug === slug);
  return {
    newer: i > 0 ? ordered[i - 1] : undefined,
    older: i >= 0 && i < ordered.length - 1 ? ordered[i + 1] : undefined,
  };
}

export function formatIssue(edition) {
  return `Issue ${String(edition.issue).padStart(2, '0')}`;
}

export function laneLabel(id) {
  return LANES.find((l) => l.id === id)?.label ?? id;
}
