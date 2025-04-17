import React from 'react';

const CurrencySelector = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h5 className="font-semibold text-gray-700 mb-2">Currency Settings</h5>
      <select className="w-full border border-gray-300 rounded-md p-2">
        <option>CAD - Canadian Dollar (C$)</option>
        {/* Add more currencies if needed */}
      </select>
    </div>
  );
};

export default CurrencySelector;
