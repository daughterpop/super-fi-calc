// Updated BlogIndex with new post at top
import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  {
    title: 'Catholic Families: AI Tools for Holy Back-to-School Season and Stronger FI Foundations',
    slug: 'catholic-families-ai-holy-back-to-school-stewardship-faith-family-and-fi',
    date: 'May 23, 2026',
    excerpt: 'As the school year kicks off, discover how Catholic families can use AI for intentional planning that strengthens faith, family bonds, and financial progress toward FI.',
    readTime: '4 min read',
    link: '/blog/catholic-families-ai-holy-back-to-school-stewardship-faith-family-and-fi'
  },
  {
    title: 'Catholic Families: AI Summer Plans for Faith, Fun, and Faster FI',
    slug: 'catholic-families-ai-summer-stewardship-faith-fun-and-fi',
    date: 'May 22, 2026',
    excerpt: 'Summer is here — the perfect time for Catholic families to blend faith, fun, and smart financial stewardship using AI tools.',
    readTime: '4 min read',
    link: '/blog/catholic-families-ai-summer-stewardship-faith-fun-and-fi'
  }
  // other existing posts...
];

export default function BlogIndex() {
  return (
    <div>
      {/* existing content */}
      {posts.map(post => (
        <Link key={post.slug} to={post.link}>
          {post.title}
        </Link>
      ))}
    </div>
  );
}
