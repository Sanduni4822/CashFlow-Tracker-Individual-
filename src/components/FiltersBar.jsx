import React, { useState } from 'react';
import { Listbox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const typeOptions = ['All types', 'Expense only', 'Income only'];
const comparisonOptions = ['Greater than', 'Less than'];

const FiltersBar = ({ searchTerm, setSearchTerm }) => {
  const [selectedType, setSelectedType] = useState(typeOptions[0]);
  const [selectedComparison, setSelectedComparison] = useState(comparisonOptions[0]);

  return (
    <div className="mb-4">
      {/* Search */}
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

      {/* Filters row */}
      <div className="flex items-center gap-4 mb-2">
        {/* All Types Dropdown */}
        <div className="w-40">
          <Listbox value={selectedType} onChange={setSelectedType}>
            <div className="relative">
              <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                <span>{selectedType}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
                </span>
              </Listbox.Button>
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                {typeOptions.map((option) => (
                  <Listbox.Option
                    key={option}
                    value={option}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-indigo-100 text-indigo-900' : 'text-gray-900'
                      }`
                    }
                  >
                    {({ selected }) => (
                      <>
                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                          {option}
                        </span>
                        {selected && (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                            <CheckIcon className="h-5 w-5" />
                          </span>
                        )}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        </div>

        {/* Greater than / Less than */}
        <div className="w-40">
          <Listbox value={selectedComparison} onChange={setSelectedComparison}>
            <div className="relative">
              <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                <span>{selectedComparison}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
                </span>
              </Listbox.Button>
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                {comparisonOptions.map((option) => (
                  <Listbox.Option
                    key={option}
                    value={option}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-indigo-100 text-indigo-900' : 'text-gray-900'
                      }`
                    }
                  >
                    {({ selected }) => (
                      <>
                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                          {option}
                        </span>
                        {selected && (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                            <CheckIcon className="h-5 w-5" />
                          </span>
                        )}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        </div>

        {/* Amount */}
        <input
          type="number"
          placeholder="Amount"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-24 sm:text-sm border-gray-300 rounded-md py-2 px-3"
        />
      </div>

      {/* Tags */}
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-1">Filter by tags:</label>
        <div className="flex flex-wrap gap-2">
          {[
            { label: "Food", color: "blue" },
            { label: "Transport", color: "green" },
            { label: "Entertainment", color: "yellow" },
            { label: "Bills", color: "green" },
            { label: "Shopping", color: "pink" },
            { label: "Health", color: "purple" },
            { label: "Travel", color: "red" },
            { label: "Salary", color: "orange" },
          ].map(({ label, color }) => (
            <button
              key={label}
              className={`inline-block px-3 py-1 rounded-full text-sm font-semibold text-${color}-500 border border-${color}-500 hover:bg-${color}-100 focus:outline-none focus:ring-2 focus:ring-${color}-500 focus:ring-opacity-50`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FiltersBar;
