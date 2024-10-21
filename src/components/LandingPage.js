import React, { useState } from 'react';
import Library from './Library';

function LandingPage() {
  const [filter, setFilter] = useState('All');

  // Handle dropdown change
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="landing-page">
      <h1>Welcome to the Media Library</h1>
      <label htmlFor="media-filter">Filter by:</label>
      <select id="media-filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="Book">Books</option>
        <option value="Movie">Movies</option>
        <option value="CD">CDs</option>
      </select>
      <Library filter={filter} />
    </div>
  );
}

export default LandingPage;
