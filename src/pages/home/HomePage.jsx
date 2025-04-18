import React from 'react';
import BalanceCard from '../../components/BalanceCard';
import StatCard from '../../components/StatCard';
import ActionsButtons from '../../components/ActionsButtons';
import CurrencySelector from '../../components/CurrencySelector';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleAddTransactionClick = () => {
    navigate('/add-transaction');
  };

  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-blue-600">SpendWise</h2>
        <p className="text-gray-600">
          Effortlessly track your daily expenses and take control of your<br />
          financial life
        </p>
      </div>

      <BalanceCard balance="+CA$3,774.44" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <StatCard label="Income" value="CA$3,995.89" color="text-green-600" />
        <StatCard label="Expenses" value="CA$221.45" color="text-red-600" />
      </div>

      <ActionsButtons
           onAddTransactionClick={() => navigate('/add-transaction')}
           onViewTransactionsClick={() => console.log('View Transactions clicked')}
      />

      <CurrencySelector />
    </>
  );
};

export default HomePage;
