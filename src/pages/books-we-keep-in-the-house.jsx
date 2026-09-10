import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostFooter from '../components/BlogPostFooter';
import { bookHref, TAN_HOME_URL } from '../data/tanBooks';

function BookLink({ title }) {
  return (
    <a
      href={bookHref(title)}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-emerald-800 hover:text-emerald-900 underline underline-offset-2"
    >
      {title}
    </a>
  );
}

export default function BooksWeKeepInTheHouse() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate">
        <p className="text-sm text-emerald-700 font-semibold uppercase tracking-wide mb-3 not-prose">
          Evergreen
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Books We Keep in the House
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Six titles that come off the shelf when the house needs a rule, a correction, or a quieter love of God than the week is offering.
        </p>

        <p className="mb-6">
          We do not keep a Catholic library for guests. We keep a short stack we reread. When a raise wants to thicken the life, or the kids need something smaller than a program, these are the ones that get pulled down.
        </p>

        <p className="mb-6">
          The money essays on this site keep circling the same three habits: name enough, let surplus pass through, order the loves. These books train that before a spreadsheet does. Links go to TAN at the same price you would pay anyway.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          <BookLink title="The Imitation of Christ" />
        </h2>
        <p className="mb-6">
          Thomas à Kempis on detachment. What comes in is meant to pass through. When a raise wants to become a heavier life, this is still the book that says no.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          <BookLink title="Introduction to the Devout Life" />
        </h2>
        <p className="mb-6">
          St. Francis de Sales wrote it for a house, a marriage, and ordinary work. Devotion that fits a Tuesday. Not a retreat schedule you will drop by Thursday.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          <BookLink title="True Devotion to Mary" />
        </h2>
        <p className="mb-6">
          St. Louis de Montfort on consecration. The point is not more Marian décor. Give the whole life — including the budget — through her hands so it does not stay private property.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          <BookLink title="Confessions" />
        </h2>
        <p className="mb-6">
          Augustine’s restless heart, and Monica’s long fidelity behind it. Ordered love is the budget. If God is not first, money will try to be, and it will never be enough.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          <BookLink title="The Spiritual Combat" />
        </h2>
        <p className="mb-6">
          Scupoli on the interior fight. The sloth that skips prayer is the same impulse that hits the card. Name the weak point. Fight one front.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          <BookLink title="Oremus" />
        </h2>
        <p className="mb-6">
          Latin and English prayers for the children, with the Church’s art. Formation that fits on a lap. If the house is going to pray together, start smaller than a program.
        </p>

        <p className="mb-6">
          That is the shelf. For everything else from TAN,{' '}
          <a
            href={TAN_HOME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-800 hover:underline"
          >
            browse the catalog
          </a>
          .
        </p>

        <p className="mb-6">
          The money side of the same habit is{' '}
          <Link to="/blog/why-fi-for-catholics" className="text-emerald-700 font-medium hover:underline">
            Why FI for Catholics
          </Link>
          .
        </p>

        <p className="text-lg font-medium text-gray-800 mt-10">
          Keep it short. Reread it. Let the rest wait.
        </p>

        <p className="text-gray-700 font-medium mt-6">
          – Dustin
        </p>

        <BlogPostFooter />
      </div>
    </div>
  );
}
