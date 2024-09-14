import React from 'react';
import { FiFileText, FiSearch, FiCalendar, FiCheckSquare, FiUserCheck, FiClipboard } from 'react-icons/fi';

const ServicesSection = () => {
  return (
    <section className="bg-white text-gray-800 p-12 w-full">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <FiFileText className="mx-auto mb-4 text-4xl text-blue-600" />
          <h3 className="text-xl font-semibold mb-2">Document Classification</h3>
          <p>Automatically classify documents into predefined categories.</p>
        </div>
        <div className="text-center">
          <FiClipboard className="mx-auto mb-4 text-4xl text-blue-600" />
          <h3 className="text-xl font-semibold mb-2">Information Extraction</h3>
          <p>Extract key information from your documents quickly and accurately.</p>
        </div>
        <div className="text-center">
          <FiSearch className="mx-auto mb-4 text-4xl text-blue-600" />
          <h3 className="text-xl font-semibold mb-2">Advanced Search</h3>
          <p>Find documents using advanced search capabilities.</p>
        </div>
        <div className="text-center">
          <FiCalendar className="mx-auto mb-4 text-4xl text-blue-600" />
          <h3 className="text-xl font-semibold mb-2">Date Verification</h3>
          <p>Ensure the dates on your documents are accurate.</p>
        </div>
        <div className="text-center">
          <FiCheckSquare className="mx-auto mb-4 text-4xl text-blue-600" />
          <h3 className="text-xl font-semibold mb-2">Signature Verification</h3>
          <p>Verify signatures to ensure document authenticity.</p>
        </div>
        <div className="text-center">
          <FiUserCheck className="mx-auto mb-4 text-4xl text-blue-600" />
          <h3 className="text-xl font-semibold mb-2">ID Verification</h3>
          <p>Confirm the identity of individuals through ID verification.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
