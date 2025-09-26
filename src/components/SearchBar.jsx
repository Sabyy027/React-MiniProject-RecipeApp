import React, { useState, useEffect } from "react";

const SearchBar = ({ searchQuery, onSearch }) => {
  const [internalQuery, setInternalQuery] = useState(searchQuery);

  useEffect(() => {
    setInternalQuery(searchQuery);
  }, [searchQuery]);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(internalQuery);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 w-full max-w-lg mx-auto">
      <div className="flex items-center bg-slate-800 border-2 border-slate-700 rounded-full shadow-lg">
        <input
          type="text"
          value={internalQuery}
          onChange={(e) => setInternalQuery(e.target.value)}
          placeholder="Search for a meal by name..."
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
  );
};

export default SearchBar;
