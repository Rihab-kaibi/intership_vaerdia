import React from "react";

const RightSidebar = ({
  ocrResults,
  isLoading,
  scanOCR,
  addCategorySegmentations,
  closeModal,
}) => {
  return (
    <div className="w-1/4 p-4 bg-white border-l">
      <div className="mt-4 flex justify-end space-x-2">
        <button
          type="button"
          onClick={() => {
            addCategorySegmentations();
            scanOCR();
          }}
          className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700"
        >
          Scan Page
        </button>
      </div>
      {isLoading && <div className="mt-4">Processing OCR...</div>}
      {ocrResults.length > 0 && (
        <div className="mt-4 bg-gray-100 p-4 rounded-md max overflow-y-auto">
          <h4 className="text-lg font-medium text-gray-900">OCR Results:</h4>
          <div className="space-y-4">
            {ocrResults.map((result, index) => (
              <div
                key={index}
                className={`p-4 rounded-md ${
                  result.isMatch ? "bg-green-100" : "bg-red-100"
                }`}
              >
                <h5 className="text-md font-semibold">Zone {result.zoneId}</h5>
                <p>
                  <strong>Extracted Text:</strong> {result.extractedText}
                </p>
                <p>
                  <strong>Expected Text:</strong> {result.zoneText}
                </p>
                <p>
                  <strong>Match Percentage:</strong>{" "}
                  {result.matchPercentage.toFixed(2)}%
                </p>
                <p>
                  <strong>Match:</strong> {result.isMatch ? "Yes" : "No"}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RightSidebar;
