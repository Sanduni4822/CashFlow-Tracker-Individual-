import React from 'react';
import NavItem from '../components/NavItem';
import { FaHome, FaPlusCircle, FaChartBar, FaTags } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md px-6 py-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-blue-600 mb-10 text-center">SpendWise</h1>
      <nav className="space-y-4 w-full">
        <NavItem icon={<FaHome />} text="Home" active />
        <NavItem icon={<FaPlusCircle />} text="Add Transaction" />
        <NavItem icon={<FaChartBar />} text="View Expenses" />
        <NavItem icon={<FaTags />} text="Manage Tags" />
      </nav>
    </aside>
  );
};

export default Sidebar;
