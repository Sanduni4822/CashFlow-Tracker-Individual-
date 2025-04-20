import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useCurrency } from "./CurrencyContext";

const currencyOptions = [
  { label: "USD - US Dollar ($)", code: "USD", symbol: "$", rate: 0.73 },
  { label: "EUR - Euro (€)", code: "EUR", symbol: "€", rate: 0.67 },
  { label: "GBP - British Pound (£)", code: "GBP", symbol: "£", rate: 0.57 },
  { label: "JPY - Japanese Yen (¥)", code: "JPY", symbol: "¥", rate: 110.25 },
  { label: "CAD - Canadian Dollar (C$)", code: "CAD", symbol: "C$", rate: 1 },
  { label: "AUD - Australian Dollar (A$)", code: "AUD", symbol: "A$", rate: 1.08 },
  { label: "CNY - Chinese Yuan (¥)", code: "CNY", symbol: "¥", rate: 5.25 },
  { label: "INR - Indian Rupee (₹)", code: "INR", symbol: "₹", rate: 60.2 },
];

const CurrencySelector = () => {
  const { currency, setCurrency } = useCurrency();
  const [open, setOpen] = useState(false);

  const handleSelect = (option) => {
    setCurrency(option);
    setOpen(false);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 relative">
      <h5 className="font-semibold text-gray-700 mb-2">Currency Settings</h5>
      <div className="relative">
        <div
          onClick={() => setOpen(!open)}
          className="border border-gray-300 rounded-md p-2 cursor-pointer flex justify-between items-center"
        >
          <span>{currency.label || "Select Currency"}</span>
          <svg className={`w-4 h-4 transform transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {open && (
          <div className="absolute z-10 bottom-full left-0 right-0 mb-1 bg-white border border-gray-300 rounded-md shadow max-h-60 overflow-y-auto">
            {currencyOptions.map((opt) => (
              <div
                key={opt.code}
                onClick={() => handleSelect(opt)}
                className={`p-2 flex items-center cursor-pointer hover:bg-blue-100 ${opt.code === currency.code ? "bg-blue-50" : ""}`}
              >
                {opt.code === currency.code ? (
                  <FaCheck className="text-blue-600 text-sm mr-2" />
                ) : (
                  <div className="w-4 mr-2" />
                )}
                <span>{opt.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrencySelector;
