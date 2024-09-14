import React from 'react';

const AnnualSubscriptionPlans = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">Annual Subscription Plans</h2>
      <p>Two months free + lower monthly costs when compared to monthly plans.</p>
      <div className="my-4">
        <div className="relative pt-1">
          <input type="range" min="1200" max="6000" className="slider" />
          <div className="flex justify-between text-xs text-gray-600">
            <span>1,200 credits (1,200 - 6,000 pages yearly)</span>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <h3 className="text-xl font-semibold mb-2">Recommended Plan</h3>
        <p>Two months FREE with an Annual Plan</p>
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl font-bold">$32.50 / mo</span>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Choose Plan</button>
        </div>
        <ul className="list-disc list-inside">
          <li>1,200 Parsing Credits Per Year</li>
          <li>Create up to 15 different parsers</li>
          <li>Premium Template Access</li>
          <li>Parse PDF, Word & Image Files</li>
          <li>Download to Excel, CSV, JSON, XML</li>
          <li>Google Sheets Export Integration</li>
        </ul>
      </div>
    </div>
  );
};

export default AnnualSubscriptionPlans;
