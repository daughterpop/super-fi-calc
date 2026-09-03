export const TAN_CODE = '28p';
export const TAN_HOME_URL = tanProductUrl('https://tanbooks.com/');

/** Product page + LeadDyno tracking. Same commission as the homepage short link. */
export function tanProductUrl(pageUrl) {
  const url = new URL(pageUrl);
  url.searchParams.set('afmc', TAN_CODE);
  url.searchParams.set('utm_campaign', TAN_CODE);
  url.searchParams.set('utm_source', 'leaddyno');
  url.searchParams.set('utm_medium', 'affiliate');
  return url.toString();
}

export const BOOK_PAGES = {
  'The Imitation of Christ':
    'https://tanbooks.com/products/books/the-imitation-of-christ-zipper-edition/',
  'Introduction to the Devout Life':
    'https://tanbooks.com/products/books/an-introduction-to-the-devout-life/',
  'True Devotion to Mary':
    'https://tanbooks.com/products/books/true-devotion-to-mary-with-preparation-for-total-consecration/',
  Confessions:
    'https://tanbooks.com/products/books/confessions-deluxe-edition/',
  'The Spiritual Combat':
    'https://tanbooks.com/products/books/the-spiritual-combat-and-a-treatise-on-peace-of-soul/',
  Oremus: 'https://tanbooks.com/products/books/tan-books/oremus/',
  'The Secret of the Rosary':
    'https://tanbooks.com/products/the-secret-of-the-rosary/',
};

export function bookHref(title) {
  const page = BOOK_PAGES[title];
  return page ? tanProductUrl(page) : TAN_HOME_URL;
}

export const FAVORITE_BOOKS = [
  { title: 'The Imitation of Christ' },
  { title: 'Introduction to the Devout Life' },
  { title: 'True Devotion to Mary' },
  { title: 'Confessions' },
  { title: 'The Spiritual Combat' },
  { title: 'Oremus' },
].map((book) => ({ ...book, href: bookHref(book.title) }));

export const TAN_AFFILIATE_URL = TAN_HOME_URL;
