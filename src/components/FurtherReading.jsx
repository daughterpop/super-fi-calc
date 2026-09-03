import { TAN_AFFILIATE_URL } from '../data/tanBooks';

/** One-title TAN rec. Omit from a post if there is no honest match. */
export default function FurtherReading({ title, note }) {
  if (!title || !note) return null;

  return (
    <div className="not-prose my-8 rounded-2xl border border-emerald-100 bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800 mb-2">
        Further reading
      </p>
      <p className="text-sm text-gray-700 leading-relaxed">
        <a
          href={TAN_AFFILIATE_URL}
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
