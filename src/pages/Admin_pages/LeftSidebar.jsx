import React from 'react';

const LeftSidebar = ({ images, selectedImageIndex, setSelectedImageIndex }) => {
  return (
    <div className="space-y-4">
      <h4 className="text-lg font-medium text-gray-900">Document</h4>
      {images.map((image, index) => (
        <div
          key={index}
          className={`cursor-pointer p-2 border rounded-md ${selectedImageIndex === index ? 'border-blue-500' : 'border-gray-300'}`}
          onClick={() => setSelectedImageIndex(index)}
        >
          <img src={image} alt={`Uploaded ${index}`} className="w-full h-24 object-cover" />
        </div>
      ))}
    </div>
  );
};

export default LeftSidebar;
