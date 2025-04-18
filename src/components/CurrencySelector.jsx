import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const currencies = [
  "USD - US Dollar ($)",
  "EUR - Euro (€)",
  "GBP - British Pound (£)",
  "JPY - Japanese Yen (¥)",
  "CAD - Canadian Dollar (C$)",
  "AUD - Australian Dollar (A$)",
  "CNY - Chinese Yuan (¥)",
  "INR - Indian Rupee (₹)",
];

const CurrencySelector = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [open, setOpen] = useState(false);

  const handleSelect = (currency) => {
    setSelectedCurrency(currency);
    setOpen(false);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 relative">
      <h5 className="font-semibold text-gray-700 mb-2">Currency Settings</h5>

      {/* Selector Box */}
      <div
        onClick={() => setOpen(!open)}
        className="border border-gray-300 rounded-md p-2 cursor-pointer flex justify-between items-center"
      >
        <span>{selectedCurrency}</span>
        <svg
          className={`w-4 h-4 transform transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Dropdown List */}
      {open && (
        <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow max-h-60 overflow-y-auto">
          {currencies.map((currency) => (
            <div
              key={currency}
              onClick={() => handleSelect(currency)}
              className={`p-2 flex items-center cursor-pointer hover:bg-blue-100 ${
                currency === selectedCurrency ? "bg-blue-50" : ""
              }`}
            >
              {/* Checkmark on the left */}
              {currency === selectedCurrency ? (
                <FaCheck className="text-blue-600 text-sm mr-2 -mt-0.5" />
              ) : (
                <div className="w-4 mr-2" /> // Placeholder for alignment
              )}
              <span>{currency}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencySelector;
