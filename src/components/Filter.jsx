import React, { useContext } from 'react';
import { EventContext } from '../Context/context';

function Filter() {
  const { filters, setFilters } = useContext(EventContext);

  const handleSearchChange = (e) => {
    setFilters({ ...filters, search: e.target.value });
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-4 flex flex-col lg:flex-row gap-4 items-center justify-between">
      <input
        type="search"
        placeholder="Search events..."
        value={filters.search || ''}
        onChange={handleSearchChange}
        className="w-full lg:w-1/4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <select
        value={filters.type}
        onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        className="w-full lg:w-1/5 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">All</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Fitness">Fitness</option>
        <option value="Meetup">Meetup</option>
        <option value="Music">Music</option>
        <option value="Social">Social</option>
        <option value="Sports">Sports</option>
        <option value="Technology">Technology</option>
        <option value="Workshop">Workshop</option>
      </select>

      <input
        type="text"
        value={filters.location}
        placeholder="Search by location"
        onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        className="w-full lg:w-1/4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        type="date"
        value={filters.date}
        onChange={(e) => setFilters({ ...filters, date: e.target.value })}
        className="w-full lg:w-1/5 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
}

export default Filter;
