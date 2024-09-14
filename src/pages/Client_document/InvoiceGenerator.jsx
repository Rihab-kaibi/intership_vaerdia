import React, { useState } from 'react';

const InvoiceGenerator = ({ billingDetails }) => {
  const [invoiceDetails, setInvoiceDetails] = useState({
    date: '',
    items: [{ description: '', quantity: 1, price: 0 }],
  });

  const handleInvoiceChange = (e) => {
    const { name, value } = e.target;
    setInvoiceDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const newItems = invoiceDetails.items.map((item, i) =>
      i === index ? { ...item, [name]: value } : item
    );
    setInvoiceDetails({ ...invoiceDetails, items: newItems });
  };

  const addItem = () => {
    setInvoiceDetails((prevDetails) => ({
      ...prevDetails,
      items: [...prevDetails.items, { description: '', quantity: 1, price: 0 }],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Invoice details:', invoiceDetails);
    // Implement invoice generation logic here
  };

  return (
    <div className="lg:w-3/4 mt-6 lg:mt-0 lg:ml-8 bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Generate Invoice</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={invoiceDetails.date}
              onChange={handleInvoiceChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Items</h3>
            {invoiceDetails.items.map((item, index) => (
              <div key={index} className="mb-4">
                <input
                  type="text"
                  name="description"
                  value={item.description}
                  placeholder="Description"
                  onChange={(e) => handleItemChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded-md mb-2"
                />
                <input
                  type="number"
                  name="quantity"
                  value={item.quantity}
                  placeholder="Quantity"
                  onChange={(e) => handleItemChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded-md mb-2"
                />
                <input
                  type="number"
                  name="price"
                  value={item.price}
                  placeholder="Price"
                  onChange={(e) => handleItemChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded-md mb-2"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addItem}
              className="bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-200"
            >
              Add Item
            </button>
          </div>
        </div>
        <div className="mt-6 flex justify-end space-x-2">
          <button
            type="submit"
            className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          >
            Generate Invoice
          </button>
        </div>
      </form>
    </div>
  );
};

export default InvoiceGenerator;
