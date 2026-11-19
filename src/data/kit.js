// Kit (ConvertKit) public form for the Tithe-First Budget Worksheet
// lead magnet (growth experiment #2). Signups go to Dustin's existing
// free Kit account. No API key is required for this public endpoint.
//
// Replace KIT_FORM_ID with the numeric form ID once the form exists.
// The signup will not post to Kit until this is a number.

export const KIT_FORM_ID = 'YOUR_KIT_FORM_ID';

export const KIT_SUBSCRIBE_URL = `https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`;

export const WORKSHEET_PATH = '/worksheets/tithe-first-budget-worksheet.pdf';

// Experiment #1 guides that should show the worksheet signup on-page.
export const WORKSHEET_OFFER_PATHS = [
  '/blog/how-to-budget-as-a-catholic-family-with-tithing-first',
  '/blog/building-an-emergency-fund-without-neglecting-the-tithe',
  '/blog/is-fire-compatible-with-catholicism',
  '/blog/faith-based-investing-basics-for-catholic-households',
  '/blog/how-to-get-started-on-your-fi-path',
  '/blog/extra-100-a-month-on-a-mortgage',
];

export function isKitFormConfigured(id = KIT_FORM_ID) {
  return /^\d+$/.test(String(id).trim());
}

export function isWorksheetOfferPath(pathname) {
  if (!pathname) return false;
  const normalized = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
  return WORKSHEET_OFFER_PATHS.includes(normalized);
}
