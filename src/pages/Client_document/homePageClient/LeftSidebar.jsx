import React from "react";

const LeftSidebar = ({ categories, selectedCategory, handleCategoryChange }) => {
  return (
    <div className="w-1/4 p-4 bg-white border-r">
      <h3 className="text-lg font-medium text-gray-900">Categories</h3>
      <div className="mt-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`w-full text-left p-2 m-1 rounded-md ${
              selectedCategory === category.id
                ? "bg-gray-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
