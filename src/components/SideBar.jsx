import React from 'react';
import { FaHome, FaPlusCircle, FaChartBar, FaTags } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import NavItem from './NavItem';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className="w-64 bg-white shadow-md px-6 py-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-black-600 mb-10 text-center">SpendWise</h1>
      <nav className="space-y-4 w-full">
        <NavItem icon={<FaHome />} text="Home" onClick={() => navigate('/')} />
        <NavItem icon={<FaPlusCircle />} text="Add Transaction" onClick={() => navigate('/add-transaction')} />
        <NavItem icon={<FaChartBar />} text="View Expenses" />
        <NavItem icon={<FaTags />} text="Manage Tags" />
      </nav>
    </aside>
  );
};

export default Sidebar;
