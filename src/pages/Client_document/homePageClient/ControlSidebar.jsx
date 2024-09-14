import React, { useState, useEffect } from "react";

const ControlSidebar = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  selectedPage,
  setSelectedPage,
  pages,
  handleScanClick,
}) => {
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    if (selectedPage) {
      const page = pages.find((p) => p.id === selectedPage);
      if (page) {
        setPreviewUrl(`http://localhost:5000/${image.path.replace('localhost:8000', '')}`);
      }
    } else {
      setPreviewUrl(null);
    }
  }, [selectedPage, pages]);

  return (
    <div className="control-sidebar bg-white p-4 border rounded shadow-md">
      <h4 className="text-lg font-medium text-gray-900">Control Sidebar</h4>
      <div className="mt-4">
        <h4 className="text-lg font-medium text-gray-900">Select Category:</h4>
        <select
          className="p-2 border rounded"
          value={selectedCategory || ""}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-medium text-gray-900">Select Page:</h4>
        <select
          className="p-2 border rounded"
          value={selectedPage || ""}
          onChange={(e) => setSelectedPage(e.target.value)}
        >
          <option value="">Select a page</option>
          {pages.map((page) => (
            <option key={page.id} value={page.id}>
              Page {page.page_number}
            </option>
          ))}
        </select>
      </div>
      {previewUrl && (
        <div className="mt-4">
          <h4 className="text-lg font-medium text-gray-900">Page Preview:</h4>
          <img src={previewUrl} alt="Page Preview" className="w-full h-auto mt-2 border rounded" />
        </div>
      )}
      <div className="mt-4">
        <button
          onClick={handleScanClick}
          className="p-2 bg-gray-800 text-white rounded shadow-md hover:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Scan Page
        </button>
      </div>
    </div>
  );
};

export default ControlSidebar;
