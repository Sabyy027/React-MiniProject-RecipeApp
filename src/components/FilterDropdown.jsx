import React, { useState, useRef, useEffect } from 'react';

const FilterDropdown = ({ categories, selectedCategory, onSelectCategory }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (category) => {
    onSelectCategory(category);
    setOpen(false);
  };

  return (
    <div className="mb-8 w-full max-w-xs mx-auto relative" ref={dropdownRef}>
      <label className="block text-sm font-medium text-gray-400 mb-2 text-center">
        Filter by Category
      </label>
      <button
        type="button"
  className="text-yellow-400 bg-slate-800 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center w-full justify-between border border-yellow-400"
        onClick={() => setOpen((prev) => !prev)}
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
      >
        {selectedCategory || 'All Categories'}
        <svg className="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>
      {open && (
        <div className="z-10 absolute left-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-full dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <button
                className={`block w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white ${selectedCategory === '' ? 'font-bold text-yellow-400' : ''}`}
                onClick={() => handleSelect('')}
              >
                All Categories
              </button>
            </li>
            {categories.map((category) => (
              <li key={category.strCategory}>
                <button
                  className={`block w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-white ${selectedCategory === category.strCategory ? 'font-bold text-yellow-400' : ''}`}
                  onClick={() => handleSelect(category.strCategory)}
                >
                  {category.strCategory}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;