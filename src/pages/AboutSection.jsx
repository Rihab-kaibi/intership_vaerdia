import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-gray-100 text-gray-800 p-12">
      <h2 className="text-3xl font-bold mb-4 text-center">About Our PFE Project</h2>
      <p className="mb-4">
        Our final year project, titled 'Study, Design, and Development of a Commercial Management Solution', aims to create a robust and comprehensive document management platform. This system leverages artificial intelligence to automate and streamline various aspects of document management, ensuring efficiency and accuracy.
      </p>
      <p className="mb-4">
        The primary objective of this project is to simplify the management of documents for businesses and government entities. By automating the classification, extraction, and verification of documents, our platform significantly reduces the time and effort required for these processes.
      </p>
      <p className="mb-4">
        Key features of our system include:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Document Classification: Automatically categorizes documents into predefined categories based on their content.</li>
        <li>Information Extraction: Extracts key data from documents quickly and accurately.</li>
        <li>Advanced Search: Provides powerful search capabilities to find documents based on various criteria.</li>
        <li>Date Verification: Ensures that the dates on documents are accurate and valid.</li>
        <li>Signature Verification: Verifies the authenticity of signatures on documents.</li>
        <li>ID Verification: Confirms the identity of individuals through ID verification.</li>
      </ul>
      <p className="mb-4">
        Our platform is built using modern technologies to ensure scalability, reliability, and performance. The frontend is developed using React and TypeScript, providing a dynamic and responsive user interface. The backend is powered by Express and Node.js, offering a robust and scalable server-side architecture. For data storage, we use MySQL, a reliable and efficient relational database.
      </p>
      <p>
        This project not only serves as a testament to our technical skills and knowledge but also addresses real-world challenges in document management. We are confident that our solution will significantly enhance the efficiency of document handling processes for businesses and government agencies alike.
      </p>
    </section>
  );
};

export default AboutSection;
