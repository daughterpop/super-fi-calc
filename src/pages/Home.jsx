import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">Welcome to Super FI Calculator</h1>
      <p className="text-xl text-center mb-8">Tools and blogs to help you achieve financial independence (@MAHAGirlDad).</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Calculators</h2>
          <ul>
            <li><Link to="/calculators/fi-calc" className="text-blue-600 hover:underline">FI Calculator</Link> - Plan your retirement</li>
            {/* Add more calculators here later */}
          </ul>
        </div>
        
        <div className="border p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Blogs</h2>
          <ul>
            <li><Link to="/blog/first-post" className="text-blue-600 hover:underline">First Blog Post</Link> - Intro to FIRE</li>
            {/* Add more blog links here later */}
          </ul>
        </div>
      </div>
    </div>
  );
}
