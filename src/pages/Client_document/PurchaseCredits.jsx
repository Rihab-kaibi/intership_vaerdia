import React from 'react';

const PurchaseCredits = () => {
  const credits = [10, 25, 50, 100];

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">Purchase Additional Credits</h2>
      <p>If your annual quota is insufficient for your needs this cycle but you do not wish to upgrade your subscription, you can purchase additional credits below at your current plan's scaling.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
        {credits.map((credit, index) => (
          <button key={index} className="bg-blue-500 text-white py-2 px-4 rounded-md">
            Add {credit} credits
          </button>
        ))}
      </div>
      <p>Your scaling under the Free Trial plan is $0.50 per credit.</p>
    </div>
  );
};

export default PurchaseCredits;
