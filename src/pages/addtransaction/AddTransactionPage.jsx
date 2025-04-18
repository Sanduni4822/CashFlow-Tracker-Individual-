import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddTransactionPage = () => {
  const navigate = useNavigate();
  const [transactionType, setTransactionType] = useState('expense');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const tags = ['Food', 'Transport', 'Entertainment', 'Bills', 'Shopping', 'Health', 'Travel', 'Salary'];

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ transactionType, description, amount, selectedTags });
    alert("Transaction added successfully!");
    navigate('/');
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 w-full">
      <h2 className="text-xl font-semibold mb-4">Add New Transaction</h2>

      <div className="mb-3">
        <label className="block text-gray-700 text-sm font-bold mb-2">Transaction Type</label>
        <div>
          <label className="inline-flex items-center mr-4">
            <input type="radio" className="form-radio" name="transactionType" value="expense" checked={transactionType === 'expense'} onChange={(e) => setTransactionType(e.target.value)} />
            <span className="ml-2">Expense</span>
          </label>
          <label className="inline-flex items-center">
            <input type="radio" className="form-radio" name="transactionType" value="income" checked={transactionType === 'income'} onChange={(e) => setTransactionType(e.target.value)} />
            <span className="ml-2">Income</span>
          </label>
        </div>
      </div>

      <div className="mb-3">
        <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="What was this transaction for?"
        />
      </div>

      <div className="mb-3">
        <label className="block text-gray-700 text-sm font-bold mb-2">Amount</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 text-sm">$</span>
          </div>
          <input
            type="number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-7"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Tags (Select at least one)</label>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              className={`inline-block px-3 py-1 rounded-full text-sm font-semibold text-gray-700 ${
                selectedTags.includes(tag) ? 'bg-blue-200' : 'bg-gray-200 hover:bg-gray-300'
              }`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Add Transaction
      </button>
    </div>
  );
};

export default AddTransactionPage;