import React, { useState, useRef } from 'react';
import { XCircle } from 'lucide-react';
import DynamicFormFields from './DynamicFormFields';

const Sidebar = ({
  categoryName,
  setCategoryName,
  formData,
  handleInputChange,
  segmentationZones,
  boxCategory,
  handleBoxCategoryChange,
  handleScanZone,
  handleDeleteZone,
  imageScale,
  setImageScale,
  canvasRef,  // Added canvasRef to props
}) => {
  const [screenshots, setScreenshots] = useState({});

  const handleSignatureScreenshot = async (zone) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const { x, y, width, height } = zone;
    const imageData = ctx.getImageData(x * imageScale, y * imageScale, width * imageScale, height * imageScale);
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = width * imageScale;
    tempCanvas.height = height * imageScale;
    const tempCtx = tempCanvas.getContext('2d');
    tempCtx.putImageData(imageData, 0, 0);
    const screenshot = tempCanvas.toDataURL('image/png');
    setScreenshots((prevScreenshots) => ({
      ...prevScreenshots,
      [zone.id]: screenshot,
    }));
  };

  const handleCategoryChange = (zoneId, value) => {
    handleBoxCategoryChange(zoneId, value);
    if (value === 'signature') {
      const zone = segmentationZones.find((zone) => zone.id === zoneId);
      if (zone) {
        handleSignatureScreenshot(zone);
      }
    }
  };

  return (
    <div className="w-1/4 flex flex-col space-y-4">
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Category Name</label>
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <DynamicFormFields handleInputChange={handleInputChange} />
      </form>
      {segmentationZones.length > 0 && (
        <div>
          <h4 className="text-lg font-medium text-gray-900">Segmentation Zones</h4>
          {segmentationZones.map((zone) => (
            <div key={zone.id} className="mb-2">
              <span className="font-semibold">ID: {zone.id}</span>
              <div className="flex items-center">
                <select
                  value={boxCategory[zone.id] || ''}
                  onChange={(e) => handleCategoryChange(zone.id, e.target.value)}
                  className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700 mr-2"
                >
                  <option value="">Select Category Type</option>
                  <option value="title">Title</option>
                  <option value="subtitle">Subtitle</option>
                  <option value="date">Date</option>
                  <option value="adresse">Adresse</option>
                  <option value="phone">phone</option>
                  <option value="email">Email</option>
                  <option value="signature">Signature</option>
                </select>
                <button
                  type="button"
                  onClick={() => handleScanZone(zone)}
                  className="bg-gray-800 text-white px-2 py-1 rounded-md hover:bg-gray-700"
                >
                  Scan
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteZone(zone.id)}
                  className="ml-2 text-gray-800 hover:text-red-700"
                >
                  <XCircle className="h-4 w-4" />
                </button>
              </div>
              {screenshots[zone.id] && (
                <div className="mt-2">
                  <img src={screenshots[zone.id]} alt={`Screenshot of zone ${zone.id}`} className="border rounded-md" />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
