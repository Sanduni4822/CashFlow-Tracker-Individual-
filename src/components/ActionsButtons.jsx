import React from 'react';
import { FaPlusCircle, FaChartBar } from 'react-icons/fa';

const ActionsButtons = ({ onAddTransactionClick, onViewTransactionsClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <button
        onClick={onAddTransactionClick}
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 flex items-center justify-center gap-2"
      >
        <FaPlusCircle /> Add Transaction
      </button>

      <button
        onClick={onViewTransactionsClick}
        className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 flex items-center justify-center gap-2"
      >
        <FaChartBar /> View Transactions
      </button>
    </div>
  );
};

export default ActionsButtons;
