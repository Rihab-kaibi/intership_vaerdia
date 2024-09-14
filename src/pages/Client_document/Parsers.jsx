// src/components/Parsers.jsx
import React from 'react';
import exampleImage from '../../assets/image.png'; // Adjust the path as necessary

const Parsers = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Getting Started with Documents-IA-Scanner</h1>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-2/3 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Create Your First Documents-IA-Scanner</h2>
            <div className=" mb-4">
              <img src={exampleImage} alt="Example" className="w-full h-auto rounded-md" />
            </div>
            <ul className="list-disc list-inside mb-4">
              <li>A Scanner contains rules used to extract the data you want.</li>
              <li>Rules provide the structure to your data so it is more useful to you.</li>
            </ul>
            <button className=" m-2 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
              Create Document Scanner
            </button>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
             Go to your Docs
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/3 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">FAQ</h2>
            <div>
              <h3 className="font-semibold">What is a Document Scanner?</h3>
              <p className="mb-2">
                A Document Parser is like a folder to which you upload your documents and also create a set of parsing rules to define your parsing logic. Typically, you will create one Document Parser for each type of document you want to parse (e.g., Invoices from a specific vendor). For further information, please check out our getting started guide which includes step-by-step instructions and video screencasts.
              </p>
              <h3 className="font-semibold">What is a Scanner Rule?</h3>
              <p>
                Parsing rules are the guidelines that determine how data is extracted from your documents. You can set up multiple rules to extract different types of data from the same document.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parsers;
