// src/components/Templates.jsx
import React from 'react';

const Templates = () => {
  const services = [
    { icon: "fas fa-file-alt text-gray-800", label: "Extract Data from PDF", available: true },
    { icon: "fas fa-file-code text-gray-500", label: "Convert PDF to XML", available: false },
    { icon: "fas fa-file-excel text-gray-500", label: "Convert PDF to Excel", available: false },
    { icon: "fas fa-file-word text-gray-500", label: "Convert PDF to Word", available: false },
    { icon: "fas fa-search text-gray-500", label: "Object Detection", available: false },
    { icon: "fas fa-file-pdf text-gray-500", label: "Merge PDF Files", available: false },
    { icon: "fas fa-file-archive text-gray-500", label: "Compress PDF Files", available: false },
    { icon: "fas fa-file-image text-gray-500", label: "Convert PDF to Image", available: false },
    { icon: "fas fa-shield-alt text-gray-800", label: "Secure PDF Files", available: false },
    { icon: "fas fa-signature text-gray-500", label: "Add Digital Signatures", available: false },
    { icon: "fas fa-file-upload text-gray-800", label: "Upload PDF to Cloud", available: false },
    { icon: "fas fa-sync-alt text-gray-800", label: "Synchronize PDF Data", available: false },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="flex">
        <div className="w-1/4">
          <h2 className="text-lg font-bold mb-4">Browse Services</h2>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-4">
            Start with our PDF parser
          </button>
          <h3 className="text-md font-bold mb-2">Services We Provide</h3>
          <p className="text-sm mb-4">
            Our platform offers a variety of services to help you manage your documents efficiently:
          </p>
          <ul className="list-disc list-inside text-sm">
            <li>Extract Data from PDF: Seamlessly extract data from PDF files.</li>
            <li>Convert PDF to XML: Transform your PDF documents into XML format.</li>
            <li>Convert PDF to Excel: Easily convert PDF files to Excel spreadsheets.</li>
            <li>Convert PDF to Word: Convert your PDF files into editable Word documents.</li>
            <li>OCR Text Extraction: Use Optical Character Recognition to extract text from images.</li>
            <li>Merge PDF Files: Combine multiple PDF files into a single document.</li>
            <li>Compress PDF Files: Reduce the size of your PDF files without losing quality.</li>
            <li>Convert PDF to Image: Convert PDF pages to image files.</li>
            <li>Secure PDF Files: Add security features to protect your PDF files.</li>
            <li>Add Digital Signatures: Include digital signatures in your PDF documents.</li>
            <li>Upload PDF to Cloud: Store your PDF files securely in the cloud.</li>
            <li>Synchronize PDF Data: Sync your PDF data across multiple platforms.</li>
          </ul>
        </div>
        <div className="w-3/4 pl-4">
          <div className="bg-gray-100 p-6 rounded-md shadow-md mb-6">
            <h2 className="text-2xl font-bold mb-2">Service Availability</h2>
            <p className="mb-2">
              Currently,thoose are the service is available. More services will be coming soon!
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Generic Templates</h3>
            <div className="grid grid-cols-3 gap-4">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <i className={`${service.icon} text-4xl mb-2`}></i>
                  <h4 className={`font-bold ${service.available ? 'text-black' : 'text-gray-400'}`}>{service.label}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
