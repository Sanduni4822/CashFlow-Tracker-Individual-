import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const ManageTagsDrawer = ({ isOpen, onClose }) => {
    const [newTagName, setNewTagName] = useState('');
    const [tags, setTags] = useState([
        { id: 1, name: 'Food', color: '#3b82f6', isEditing: false },
        { id: 2, name: 'Transport', color: '#10b981', isEditing: false },
        { id: 3, name: 'Entertainment', color: '#f59e0b', isEditing: false },
        { id: 4, name: 'Bills', color: '#6366f1', isEditing: false },
        { id: 5, name: 'Shopping', color: '#ec4899', isEditing: false },
        { id: 6, name: 'Health', color: '#8b5cf6', isEditing: false },
        { id: 7, name: 'Travel', color: '#ef4444', isEditing: false },
        { id: 8, name: 'Salary', color: '#f97316', isEditing: false }
    ]);
    const [editingTagId, setEditingTagId] = useState(null);
    const [editText, setEditText] = useState('');
    const [selectedColor, setSelectedColor] = useState('#3b82f6'); // Default color

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
                id: tags.length > 0 ? Math.max(...tags.map(t => t.id)) + 1 : 1,
                name: newTagName.trim(),
                color: selectedColor,
                isEditing: false
            };
            setTags([...tags, newTag]);
            setNewTagName('');
        }
    };

    const handleEditClick = (id, name, color) => {
        setEditingTagId(id);
        setEditText(name);
        setSelectedColor(color);
        setNewTagName(name); // Populate input for editing
        setTags(tags.map(tag => tag.id === id ? { ...tag, isEditing: true } : tag));
    };

    const handleUpdateTag = () => {
        if (editingTagId) {
            setTags(tags.map(tag =>
                tag.id === editingTagId ? { ...tag, name: editText.trim(), color: selectedColor, isEditing: false } : tag
            ));
            setEditingTagId(null);
            setEditText('');
            setNewTagName('');
        }
    };

    const handleDeleteTag = (id) => {
        setTags(tags.filter(tag => tag.id !== id));
    };

    const getRandomColor = () => {
        const colors = ['#3b82f6', '#10b981', '#f59e0b', '#6366f1', '#ec4899', '#8b5cf6', '#ef4444', '#f97316'];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <div className={`fixed inset-0 z-50 flex justify-end transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

            {/* Drawer */}
            <div className="fixed top-0 right-0 bottom-0 w-96 max-w-full bg-white shadow-xl flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-center p-4">
                    <h2 className="text-xl font-bold">Manage Tags</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-black">
                        ✕
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-4">
                    {/* Add/Update Tag */}
                    <div className="flex items-center gap-2 mb-6">
                        <input
                            type="text"
                            value={newTagName}
                            onChange={(e) => {
                                setNewTagName(e.target.value);
                                if (editingTagId) setEditText(e.target.value); // Update editText if editing
                            }}
                            placeholder="Tag name"
                            className="flex-1 border border-blue-400 rounded-lg p-2"
                        />
                        <div className="w-8 h-8 rounded" style={{ backgroundColor: selectedColor }}></div>
                        <button
                            onClick={editingTagId ? handleUpdateTag : handleAddTag}
                            className={`text-white px-4 py-2 rounded-lg hover:bg-blue-700 ${editingTagId ? 'bg-green-600' : 'bg-blue-600'}`}
                        >
                            {editingTagId ? 'Update' : 'Add'}
                        </button>
                    </div>

                    {/* Tag List */}
                    <div className="space-y-1">
                        {tags.map((tag) => (
                            <div key={tag.id} className="flex items-center justify-between py-3 px-1 bg-gray-50 rounded">
                                <div className="flex items-center gap-2">
                                    <div
                                        className="w-4 h-4 rounded-full"
                                        style={{ backgroundColor: tag.color }}
                                    ></div>
                                    <span>{tag.name}</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <button
                                        onClick={() => handleEditClick(tag.id, tag.name, tag.color)}
                                        className="text-black-600"
                                    >
                                        Edit
                                    </button>
                                    <button onClick={() => handleDeleteTag(tag.id)} className="text-black-500">
                                        Delete
                                    </button>
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