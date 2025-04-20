

import React from 'react';
import BalanceCard from '../../components/BalanceCard';
import StatCard from '../../components/StatCard';
import ActionsButtons from '../../components/ActionsButtons';
import CurrencySelector from '../../components/CurrencySelector';
import { useCurrency } from '../../components/CurrencyContext';
import { useNavigate } from 'react-router-dom';
import { LuTrendingUp, LuTrendingDown } from 'react-icons/lu'; // ✅ NEW ICONS

const HomePage = () => {
  const navigate = useNavigate();
  const { currency } = useCurrency();

  // Raw values in CAD (base)
  const incomeCAD = 3995.89;
  const expenseCAD = 221.45;

  const convertedIncome = (incomeCAD * currency.rate).toFixed(2);
  const convertedExpense = (expenseCAD * currency.rate).toFixed(2);
  const balance = (convertedIncome - convertedExpense).toFixed(2);

  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-blue-600">SpendWise</h2>
        <p className="text-gray-600">
          Effortlessly track your daily expenses and take control of your<br />
          financial life
        </p>
      </div>

      <BalanceCard balance={`${currency.symbol}${balance}`} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <StatCard
          label="Income"
          value={`${currency.symbol}${convertedIncome}`}
          color="text-green-600"
          icon={<LuTrendingUp />} // ✅ UPDATED ICON
        />
        <StatCard
          label="Expenses"
          value={`${currency.symbol}${convertedExpense}`}
          color="text-red-600"
          icon={<LuTrendingDown />} // ✅ UPDATED ICON
        />
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
