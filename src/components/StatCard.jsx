import React from 'react';

const StatCard = ({ label, value, icon, color, bgColor }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex items-center justify-between">
      <div>
        <h4 className="text-gray-500 font-semibold">{label}</h4>
        <p className={`text-2xl font-bold ${color}`}>{value}</p>
      </div>
      <div className={`w-10 h-10 flex items-center justify-center rounded-full ${bgColor}`}>
        <div className={`text-lg ${color}`}> {/* Smaller icon size */}
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
