import React from 'react';

const FAQ = () => {
  const faqs = [
    "How does the document parsing credit system work?",
    "How does upgrading or downgrading my account work?",
    "What happens when I'm running out of document parsing credits?",
    "How can I update my credit card?",
    "How and when can a subscription be cancelled?",
    "Do you offer one-time and pay-as-you-go plans?",
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <ul className="list-disc list-inside">
        {faqs.map((faq, index) => (
          <li key={index} className="mb-2">{faq}</li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
