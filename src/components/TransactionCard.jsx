import React, { useState } from 'react';

const TransactionCard = ({ description, amount, date }) => {
  const [isOpen, setIsOpen] = useState(false);

  const formattedDate = new Date(date).toLocaleDateString();
  const amountColorClass = amount < 0 ? 'text-red-500' : 'text-green-500';
  const formattedAmount =
    amount < 0 ? `-CA$${Math.abs(amount).toFixed(2)}` : `+CA$${amount.toFixed(2)}`;

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="bg-white rounded-md shadow-sm p-4 cursor-pointer transition-shadow hover:shadow-md"
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold">{description}</p>
          <p className="text-gray-500 text-sm">{formattedDate}</p>
        </div>
        <div className="flex items-center">
          <p className={`font-semibold mr-2 ${amountColorClass}`}>{formattedAmount}</p>
          <svg
            className={`h-5 w-5 text-gray-400 transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className="mt-3 flex space-x-2 border-t pt-3">
          <button
            className="flex items-center px-3 py-1 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded"
            onClick={(e) => {
              e.stopPropagation();
              console.log('Edit clicked');
            }}
          >
            ✏️ Edit
          </button>
          <button
            className="flex items-center px-3 py-1 text-sm text-red-600 bg-red-100 hover:bg-red-200 rounded"
            onClick={(e) => {
              e.stopPropagation();
              console.log('Delete clicked');
            }}
          >
            🗑 Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default TransactionCard;
