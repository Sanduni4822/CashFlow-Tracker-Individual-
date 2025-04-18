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
            <input type="radio" name="transactionType" value="expense" checked={transactionType === 'expense'} onChange={(e) => setTransactionType(e.target.value)} />
            <span className="ml-2">Expense</span>
          </label>
          <label className="inline-flex items-center">
            <input type="radio" name="transactionType" value="income" checked={transactionType === 'income'} onChange={(e) => setTransactionType(e.target.value)} />
            <span className="ml-2">Income</span>
          </label>
        </div>
      </div>

      <div className="mb-3">
        <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
        <input type="text" className="w-full px-3 py-2 border rounded" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>

      <div className="mb-3">
        <label className="block text-gray-700 text-sm font-bold mb-2">Amount</label>
        <input type="number" className="w-full px-3 py-2 border rounded" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Tags</label>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button key={tag} type="button" className={`px-3 py-1 rounded-full text-sm ${selectedTags.includes(tag) ? 'bg-blue-300' : 'bg-gray-200 hover:bg-gray-300'}`} onClick={() => handleTagClick(tag)}>
              {tag}
            </button>
          ))}
        </div>
      </div>

      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Transaction
      </button>
    </div>
  );
};

export default AddTransactionPage;
