import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ManageTagsDrawer from './ManageTagsDrawer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar openDrawer={() => setIsDrawerOpen(true)} />
      <main className="flex-1 px-8 py-8 max-w-2xl mx-auto">
        <Outlet />
      </main>
      <ManageTagsDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
};

export default MainLayout;
