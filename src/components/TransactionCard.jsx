import React from 'react';

const TransactionCard = ({ description, amount, date }) => {
  const formattedDate = new Date(date).toLocaleDateString();
  const amountColorClass = amount < 0 ? 'text-red-500' : 'text-green-500';
  const formattedAmount = amount < 0 ? `-CA$${Math.abs(amount).toFixed(2)}` : `+CA$${amount.toFixed(2)}`;

  return (
    <div className="bg-white rounded-md shadow-sm p-4 flex justify-between items-center">
      <div>
        <p className="font-semibold">{description}</p>
        <p className="text-gray-500 text-sm">{formattedDate}</p>
      </div>
      <div className="flex items-center">
        <p className={`font-semibold mr-2 ${amountColorClass}`}>{formattedAmount}</p>
        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default TransactionCard;