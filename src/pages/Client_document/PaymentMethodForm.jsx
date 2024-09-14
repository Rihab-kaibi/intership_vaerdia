import React from 'react';
import { FaCreditCard, FaUniversity } from 'react-icons/fa';
import visaLogo from '../../assets/visa-new-20215093.jpg'; // Update with actual path to Visa logo
import mastercardLogo from '../../assets/muster_card.png'; // Update with actual path to MasterCard logo

const PaymentMethodForm = ({ billingDetails, handleChange, handleSubmit, onReturn }) => (
  <div className="lg:w-3/4 mt-6 lg:mt-0 lg:ml-8 bg-white p-6 rounded-md shadow-md">
    <h2 className="text-2xl font-bold mb-4">Add Payment Method</h2>
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">Numéro de carte</label>
          <input
            type="text"
            name="cardNumber"
            value={billingDetails.cardNumber}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Date d'expiration</label>
          <input
            type="text"
            name="cardExpiry"
            value={billingDetails.cardExpiry}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">CVC</label>
          <input
            type="text"
            name="cardCvc"
            value={billingDetails.cardCvc}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">Pays</label>
          <select
            name="country"
            value={billingDetails.country}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
           <option value="Tunisia">Tunisie</option>
           <option value="France">France</option>
           <option value="United States">États-Unis</option>
           <option value="Canada">Canada</option>
           <option value="Germany">Allemagne</option>
           <option value="Italy">Italie</option>
           <option value="Spain">Espagne</option>
           <option value="Japan">Japon</option>
           <option value="Brazil">Brésil</option>
           <option value="India">Inde</option>

            {/* Add more options as needed */}
          </select>
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">Link Email</label>
          <input
            type="email"
            name="email"
            value={billingDetails.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="mt-6 flex justify-end space-x-2">
        <button
          type="button"
          className="bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-200"
          onClick={onReturn}
        >
          Return
        </button>
        <button
          type="submit"
          className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-600"
        >
          Save
        </button>
      </div>
    </form>
    <div className="mt-6 flex justify-center space-x-4">
      <img src={visaLogo} alt="Visa" className="h-8" />
      <img src={mastercardLogo} alt="MasterCard" className="h-8" />
    </div>
  </div>
);

export default PaymentMethodForm;
