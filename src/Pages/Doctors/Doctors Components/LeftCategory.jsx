import React, { useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";

const LeftCategory = ({
  doctorCategories,
  selectedCategories,
  handleCheckboxChange,
  searchQuery,
  onSearch,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="w-full">
      <div className="relative mb-8">
        <input
          className="w-full pl-4 pr-10 py-3 text-sm text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          type="text"
          placeholder="Search doctors by name or specialty"
          aria-label="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <IoSearchSharp className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg cursor-pointer hover:text-blue-500 transition-colors duration-200" />
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <h3 className="text-lg font-semibold text-gray-800 bg-gray-50 px-6 py-4 border-b border-gray-200">
          Categories
        </h3>
        <div className="flex flex-col gap-2 p-4">
          {doctorCategories.map((category) => (
            <label
              key={category.id}
              className="flex items-center gap-3 text-sm text-gray-700 hover:text-blue-600 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              onClick={() => handleCheckboxChange(category.name)}
            >
              <input
                type="checkbox"
                class="checkbox checkbox-neutral checkbox-sm border-gray-300"
                checked={selectedCategories.includes(category.name)}
                onChange={() => handleCheckboxChange(category.name)}
              />
              <span>{category.name}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftCategory;
