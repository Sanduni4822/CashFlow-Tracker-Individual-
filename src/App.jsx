// Optional version with routing setup
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Future routes:
        <Route path="/add" element={<AddTransaction />} />
        <Route path="/expenses" element={<Expenses />} />
        */}
      </Routes>
    </Router>
  );
}

export default App;
