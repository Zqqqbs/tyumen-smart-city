
import React, { useState } from 'react';

interface FilterSidebarProps {
  categories: string[];
  activeCategory: string;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({ categories, activeCategory }) => {
  const [current, setCurrent] = useState(activeCategory);

  return (
    <div className="bg-[#1e3a4c] p-6 h-full">
      <ul className="space-y-3">
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => setCurrent(category)}
              className={`text-left w-full text-sm ${
                current === category
                  ? 'bg-sky-500 text-white px-3 py-1.5 rounded-md'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
