import React from 'react';
import { FaPlusCircle, FaChartBar } from 'react-icons/fa';

const ActionsButtons = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 flex items-center gap-2">
        <FaPlusCircle /> Add Transaction
      </button>
      <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 flex items-center gap-2">
        <FaChartBar /> View Transactions
      </button>
    </div>
  );
};

export default ActionsButtons;
