import React, { useState, useEffect } from 'react';

const ManageTagsDrawer = ({ isOpen, onClose }) => {
  const [newTagName, setNewTagName] = useState('');
  const [tags, setTags] = useState([
    { id: 1, name: 'Food', color: '#3b82f6' },
    { id: 2, name: 'Transport', color: '#10b981' },
    { id: 3, name: 'Entertainment', color: '#f59e0b' },
    { id: 4, name: 'Bills', color: '#6366f1' },
    { id: 5, name: 'Shopping', color: '#ec4899' },
    { id: 6, name: 'Health', color: '#8b5cf6' },
    { id: 7, name: 'Travel', color: '#ef4444' },
    { id: 8, name: 'Salary', color: '#f97316' }
  ]);
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleAddTag = () => {
    if (newTagName.trim()) {
      const newTag = {
        id: tags.length + 1,
        name: newTagName.trim(),
        color: getRandomColor()
      };
      setTags([...tags, newTag]);
      setNewTagName('');
    }
  };

  const getRandomColor = () => {
    const colors = ['#3b82f6', '#10b981', '#f59e0b', '#6366f1', '#ec4899', '#8b5cf6', '#ef4444', '#f97316'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-end transition-opacity duration-300 ${
      isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

      {/* Drawer */}
      <div className="relative h-full w-96 max-w-full bg-white shadow-xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Manage Tags</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Add Tag */}
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={newTagName}
                onChange={(e) => setNewTagName(e.target.value)}
                placeholder="Tag name"
                className="w-full border border-gray-300 rounded-lg p-2 pl-3"
              />
            </div>
            <div className="w-8 h-8 bg-blue-500 rounded"></div>
            <button 
              onClick={handleAddTag}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Add
            </button>
          </div>

          {/* Tag List */}
          <div className="space-y-3">
            {tags.map((tag) => (
              <div key={tag.id} className="flex items-center justify-between py-2">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: tag.color }}
                  ></div>
                  <span className="text-base">{tag.name}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="text-blue-600 hover:underline">Edit</button>
                  <button className="text-red-500 hover:underline">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageTagsDrawer;