import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };


  return (
    <form onSubmit={handleSubmit} className="mb-8 w-full max-w-lg mx-auto">
        <div className="flex items-center bg-slate-800 border-2 border-slate-700 rounded-full shadow-lg">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a meal..."
          className="w-full bg-transparent py-3 px-6 text-white placeholder-gray-400 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-3 px-6 rounded-r-full transition-colors duration-300"
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchBar
