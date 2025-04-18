import React from 'react';

const FiltersBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-4">
      <div className="relative rounded-md shadow-sm mb-2">
        <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-4 py-3 sm:text-sm border-gray-300 rounded-md"
          placeholder="Search transactions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-4 mb-2">
        <select className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-auto sm:text-sm border-gray-300 rounded-md py-2 px-3">
          <option>All types</option>
          <option>Expense only</option>
          <option>Income only</option>
          {/* You can add more specific types if needed */}
        </select>
        <select className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-auto sm:text-sm border-gray-300 rounded-md py-2 px-3">
          <option>Greater than</option>
          {/* Add comparison options here */}
        </select>
        <input
          type="number"
          placeholder="Amount"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-24 sm:text-sm border-gray-300 rounded-md py-2 px-3"
        />
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-1">Filter by tags:</label>
        <div className="flex flex-wrap gap-2">
          <button className="inline-block px-3 py-1 rounded-full text-sm font-semibold text-blue-500 border border-blue-500 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Food</button>
          <button className="inline-block px-3 py-1 rounded-full text-sm font-semibold text-green-500 border border-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">Transport</button>
          <button className="inline-block px-3 py-1 rounded-full text-sm font-semibold text-yellow-500 border border-yellow-500 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">Entertainment</button>
          <button className="inline-block px-3 py-1 rounded-full text-sm font-semibold text-green-500 border border-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">Bills</button>
          <button className="inline-block px-3 py-1 rounded-full text-sm font-semibold text-pink-500 border border-pink-500 hover:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50">Shopping</button>
          <button className="inline-block px-3 py-1 rounded-full text-sm font-semibold text-purple-500 border border-purple-500 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">Health</button>
          <button className="inline-block px-3 py-1 rounded-full text-sm font-semibold text-red-500 border border-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">Travel</button>
          <button className="inline-block px-3 py-1 rounded-full text-sm font-semibold text-orange-500 border border-orange-500 hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">Salary</button>
          {/* Add more tags as needed */}
        </div>
      </div>
    </div>
  );
};

export default FiltersBar;