import React, { useState } from 'react';
import { FaCreditCard, FaUniversity, FaInfoCircle } from 'react-icons/fa';
import BillingDetailsForm from './BillingDetailsForm';
import PaymentMethodForm from './PaymentMethodForm';
import InvoiceGenerator from './InvoiceGenerator';

const Billing = () => {
  const [billingDetails, setBillingDetails] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    euVatNumber: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipcode: '',
    country: 'Tunisia',
    email: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  });

  const [view, setView] = useState('billingDetails');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Billing details submitted:', billingDetails);
  };

  return (
    <div className="p-8 bg-white">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/4 bg-gray-100 p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Menu</h2>
          <ul className="space-y-2">
            <li
              className={`p-2 rounded-md cursor-pointer flex items-center ${
                view === 'invoices' ? 'bg-gray-800 text-white' : 'bg-white hover:bg-gray-200'
              }`}
              onClick={() => setView('invoices')}
            >
              <FaInfoCircle className="mr-2" /> Invoices
            </li>
            <li
              className={`p-2 rounded-md cursor-pointer flex items-center ${
                view === 'billingDetails' ? 'bg-gray-800 text-white' : 'bg-white hover:bg-gray-200'
              }`}
              onClick={() => setView('billingDetails')}
            >
              <FaCreditCard className="mr-2" /> Billing Details
            </li>
            <li
              className={`p-2 rounded-md cursor-pointer flex items-center ${
                view === 'paymentMethod' ? 'bg-gray-800  text-white' : 'bg-white hover:bg-gray-200'
              }`}
              onClick={() => setView('paymentMethod')}
            >
              <FaUniversity className="mr-2" /> Payment Method
            </li>
          </ul>
        </div>
        {view === 'billingDetails' && (
          <BillingDetailsForm
            billingDetails={billingDetails}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        )}
        {view === 'paymentMethod' && (
          <PaymentMethodForm
            billingDetails={billingDetails}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            onReturn={() => setView('billingDetails')}
          />
        )}
        {view === 'invoices' && (
          <InvoiceGenerator billingDetails={billingDetails} />
        )}
      </div>
    </div>
  );
};

export default Billing;
