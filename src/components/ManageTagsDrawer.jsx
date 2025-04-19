import React, { useEffect } from "react";

const ManageTagsDrawer = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-lg p-4 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Manage Tags</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            ✕
          </button>
        </div>

        {/* Add Tag */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Add new tag"
            className="flex-1 border rounded px-2 py-1"
          />
          <button className="bg-blue-500 text-white px-3 rounded">Add</button>
        </div>

        {/* Tag List */}
        <div className="space-y-2">
          {["Food", "Transport", "Shopping"].map((tag) => (
            <div
              key={tag}
              className="flex justify-between items-center bg-gray-100 p-2 rounded"
            >
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span>{tag}</span>
              </div>
              <div className="flex gap-2 text-sm text-blue-600">
                <button>Edit</button>
                <button className="text-red-500">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageTagsDrawer;
