import React from 'react';

const ComparePlans = () => {
  const plans = [
    {
      title: "Starter Plan",
      price: "$32.50 / mo",
      billed: "Billed Annually",
      description: "Great for individuals tired of manually extracting data trapped in their documents.",
      features: [
        "1,200 Parsing Credits Per Year",
        "Create up to 15 different parsers",
        "Premium Template Access",
        "Parse PDF, Word & Image Files",
        "Download to Excel, CSV, JSON, XML",
        "Google Sheets Export Integration",
        "Access to 100's of Other Integrations",
        "Beginners Webinar, Articles + Support",
      ],
    },
    {
      title: "Pro Plan",
      price: "$61.58 / mo",
      billed: "Billed Annually",
      description: "Perfect for professionals getting serious about data extraction and workflow automation.",
      features: [
        "3,000 Parsing Credits Per Year",
        "Create up to 50 different parsers",
        "Multifactor Authentication",
        "Managed Users",
        "Teams (up to 5 members)",
        "Free Parsing Setup",
      ],
    },
    {
      title: "Business Plan",
      price: "$133 / mo",
      billed: "Billed Annually",
      description: "Automate entire business processes with document parsing and cloud integrations.",
      features: [
        "12,000 Parsing Credits Per Year",
        "Create up to 500 different parsers",
        "Parser Version Control",
        "Multi-Layouts",
        "Teams (up to 50 members)",
        "Priority Support",
        "Priority Parsing Access",
      ],
    },
    {
      title: "Enterprise Plan",
      price: "Contact",
      billed: "Billed Annually",
      description: "Need more? Build a package tailored to your specific parsing requirements. Contact Us for a quote.",
      features: [
        "Custom Parsing Credits Per Year",
        "Unlimited Parsers",
        "Extended Document Retention",
        "Teams (unlimited members)",
        "White Labeling License",
      ],
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">Compare Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {plans.map((plan, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md">
            <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
            <p className="text-lg font-bold text-blue-600 mb-2">{plan.price}</p>
            <p className="text-sm text-gray-600 mb-2">{plan.billed}</p>
            <p className="text-sm text-gray-800 mb-4">{plan.description}</p>
            <ul className="list-disc list-inside mb-4">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Choose Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparePlans;
