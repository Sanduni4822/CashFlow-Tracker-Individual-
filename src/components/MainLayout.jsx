import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 px-8 py-8 max-w-2xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
