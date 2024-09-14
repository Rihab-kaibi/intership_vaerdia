import React from 'react';

const BillingDetailsForm = ({ billingDetails, handleChange, handleSubmit }) => (
  <div className="lg:w-3/4 mt-6 lg:mt-0 lg:ml-8 bg-white p-6 rounded-md shadow-md">
    <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-1">Your First Name</label>
          <input
            type="text"
            name="firstName"
            value={billingDetails.firstName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Your Last Name</label>
          <input
            type="text"
            name="lastName"
            value={billingDetails.lastName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={billingDetails.companyName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">EU-VAT Number</label>
          <input
            type="text"
            name="euVatNumber"
            value={billingDetails.euVatNumber}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            type="text"
            name="phone"
            value={billingDetails.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Address Line 1</label>
          <input
            type="text"
            name="addressLine1"
            value={billingDetails.addressLine1}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Address Line 2</label>
          <input
            type="text"
            name="addressLine2"
            value={billingDetails.addressLine2}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">City</label>
          <input
            type="text"
            name="city"
            value={billingDetails.city}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">State</label>
          <input
            type="text"
            name="state"
            value={billingDetails.state}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Zipcode</label>
          <input
            type="text"
            name="zipcode"
            value={billingDetails.zipcode}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Country</label>
          <select
            name="country"
            value={billingDetails.country}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="Tunisia">Tunisia</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>
      <div className="mt-6 flex justify-end space-x-2">
        <button
          type="button"
          className="bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-200"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-500"
        >
          Update Billing
        </button>
      </div>
    </form>
  </div>
);

export default BillingDetailsForm;
