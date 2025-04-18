import React from 'react';
import { FaHome, FaPlusCircle, FaChartBar, FaTags } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import NavItem from './NavItem';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation(); 

  return (
    <aside className="w-64 bg-white shadow-md px-6 py-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-black-600 mb-10 text-center">SpendWise</h1>
      <nav className="space-y-4 w-full">
        <NavItem
          icon={<FaHome />}
          text="Home"
          onClick={() => navigate('/')}
          active={location.pathname === '/'} 
        />
        <NavItem
          icon={<FaPlusCircle />}
          text="Add Transaction"
          onClick={() => navigate('/add-transaction')}
          active={location.pathname === '/add-transaction'}
        />
        <NavItem
          icon={<FaChartBar />}
          text="View Expenses"
          onClick={() => navigate('/view-expenses')} 
          active={location.pathname === '/view-expenses'} 
        />
        <NavItem
          icon={<FaTags />}
          text="Manage Tags"
          onClick={() => navigate('/manage-tags')} 
          active={location.pathname === '/manage-tags'} 
        />
      </nav>
    </aside>
  );
};

export default Sidebar;