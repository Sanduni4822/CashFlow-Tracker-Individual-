import React from 'react';

const NavItem = ({ icon, text, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition 
        ${active ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
    >
      <div className="text-lg">{icon}</div>
      <span className="font-medium">{text}</span>
    </div>
  );
};

export default NavItem;
