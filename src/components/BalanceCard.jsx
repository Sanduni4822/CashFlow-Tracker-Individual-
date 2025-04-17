import React from 'react';

const BalanceCard = ({ balance }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-lg shadow-lg mb-8 text-center">
      <h3 className="text-xl font-semibold">Your Balance</h3>
      <p className="text-3xl font-bold text-green-300">{balance}</p>
    </div>
  );
};

export default BalanceCard;
