import { bookHref } from '../data/tanBooks';

/** One-title TAN rec. Links the title to that book's product page with tracking. */
export default function FurtherReading({ title, note, href }) {
  if (!title || !note) return null;
  const link = href || bookHref(title);

  return (
    <div className="not-prose my-8 rounded-2xl border border-emerald-100 bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800 mb-2">
        Further reading
      </p>
      <p className="text-sm text-gray-700 leading-relaxed">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-emerald-800 hover:text-emerald-900 underline underline-offset-2"
        >
          {title}
        </a>{' '
        }— {note}
      </p>
    </div>
  );
}
