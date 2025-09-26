import React from 'react';

const FilterDropdown = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="mb-8 w-full max-w-xs mx-auto">
      <label htmlFor="category-filter" className="block text-sm font-medium text-gray-400 mb-2 text-center">
        Filter by Category
      </label>
      <select
        id="category-filter"
        value={selectedCategory}
        onChange={(e) => onSelectCategory(e.target.value)}
        className="w-full bg-slate-800 border-2 border-slate-700 rounded-full py-2 px-4 text-white focus:outline-none focus:border-yellow-400"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category.strCategory} value={category.strCategory}>
            {category.strCategory}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;