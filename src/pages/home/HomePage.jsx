import React from 'react';
import SideBar from "../../components/SideBar";
import BalanceCard from "../../components/BalanceCard";
import StatCard from "../../components/StatCard";
import ActionsButtons from "../../components/ActionsButtons";
import CurrencySelector from "../../components/CurrencySelector";
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideBar />
      <main className="flex-1 p-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-blue-600">SpendWise</h2>
          <p className="text-gray-600">Effortlessly track your daily expenses and take control of your financial life</p>
        </div>

        <BalanceCard balance="+CA$3,774.44" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <StatCard label="Income" value="CA$3,995.89" icon={<FaArrowUp />} color="text-green-600" />
          <StatCard label="Expenses" value="CA$221.45" icon={<FaArrowDown />} color="text-red-600" />
        </div>

        <ActionsButtons />
        <CurrencySelector />
      </main>
    </div>
  );
};

export default HomePage;
