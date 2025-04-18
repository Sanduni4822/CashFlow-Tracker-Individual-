import React, { useState } from 'react';
import TransactionCard from '../../components/TransactionCard';
import FiltersBar from '../../components/FiltersBar';

const dummyTransactions = [
  { id: 1, description: 'Dinner at restaurant', amount: -78.5, date: '2025-03-27' },
  { id: 2, description: 'Grocery shopping Updated', amount: -45.89, date: '2025-03-26' },
  { id: 3, description: 'Monthly salary', amount: 3200, date: '2025-03-25' },
  { id: 4, description: 'Dinner at restaurant', amount: -78.50, date: '2025-03-27' },
  { id: 5, description: 'Uber ride', amount: -12.75, date: '2025-03-27' },
];

const ViewExpense = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTransactions = dummyTransactions.filter((t) =>
    t.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Transactions</h2>

      <FiltersBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="space-y-4">
        {filteredTransactions.map((tx) => (
          <TransactionCard
            key={tx.id}
            description={tx.description}
            amount={tx.amount}
            date={tx.date}
          />
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <button className="px-4 py-2 mr-2 text-gray-600 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          &lt; Previous
        </button>
        <span className="px-3 py-2 text-blue-500 font-semibold">1</span>
        <button className="px-4 py-2 ml-2 text-blue-500 rounded-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default ViewExpense;