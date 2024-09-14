import React from 'react';

const MonthlyUsage = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-2">Monthly Usage</h2>
      <p>You are currently on a free trial plan. Your free trial period will end on 06/22/2024. You can continue evaluating Docparser for free until your trial ends or upgrade to a paid monthly subscription right now.</p>
      <div className="my-4">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                1 / 100 Parsing Credits Used
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
            <div style={{ width: "1%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
          </div>
        </div>
      </div>
      <p>Choose a monthly plan which fits your usage below. All plans can be up- and downgraded any time and we have a zero questions asked money back guarantee if you are not happy with Docparser.</p>
      <p>You can upgrade or downgrade your subscription at any time.</p>
    </div>
  );
};

export default MonthlyUsage;
