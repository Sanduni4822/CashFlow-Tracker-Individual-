// ViewExpense.jsx
import React, { useState, useEffect } from 'react';
import TransactionCard from '../../components/TransactionCard';
import FiltersBar from '../../components/FiltersBar';

const dummyTransactions = [
  { id: 1, description: 'Testing one', amount: 200.00, date: '2025-04-01' },
  { id: 2, description: 'fsfdfd', amount: -34555.00, date: '2025-04-01' },
  { id: 3, description: 'Grocery shopping', amount: -45.89, date: '2025-04-01' },
  { id: 4, description: 'Monthly salary', amount: 3200.00, date: '2025-04-03' },
  { id: 5, description: 'Dinner at restaurant', amount: -78.50, date: '2025-04-03' },
  { id: 6, description: 'Uber ride', amount: -12.75, date: '2025-04-02' },
  { id: 7, description: 'Movie tickets', amount: -25.00, date: '2025-04-04' },
  { id: 8, description: 'Electricity bill', amount: -95.25, date: '2025-04-05' },
  { id: 9, description: 'Freelance project', amount: 400.00, date: '2025-04-06' },
];

const ViewExpense = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [transactionType, setTransactionType] = useState('All types');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Adjusted to match the image

  const filteredTransactions = dummyTransactions.filter((t) => {
    const matchesSearch = t.description.toLowerCase().includes(searchTerm.toLowerCase());
    const isExpense = t.amount < 0;
    const isIncome = t.amount > 0;

    const matchesType =
      transactionType === 'All types' ||
      (transactionType === 'Expense only' && isExpense) ||
      (transactionType === 'Income only' && isIncome);

    return matchesSearch && matchesType;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginatedTransactions = filteredTransactions.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, transactionType]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Transactions</h2>

      <FiltersBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        transactionType={transactionType}
        setTransactionType={setTransactionType}
      />

      <div className="space-y-4">
        {paginatedTransactions.length > 0 ? (
          paginatedTransactions.map((tx) => (
            <TransactionCard
              key={tx.id}
              description={tx.description}
              amount={tx.amount}
              date={tx.date}
            />
          ))
        ) : (
          <p className="text-gray-500">No transactions found.</p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="mt-6 flex justify-center items-center gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className={`px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none ${
              currentPage === 1 ? 'cursor-not-allowed text-gray-400' : ''
            }`}
            disabled={currentPage === 1}
          >
            &lt; Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-2 rounded-md ${
                currentPage === i + 1
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            className={`px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none ${
              currentPage === totalPages ? 'cursor-not-allowed text-gray-400' : ''
            }`}
            disabled={currentPage === totalPages}
          >
            Next &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default ViewExpense;