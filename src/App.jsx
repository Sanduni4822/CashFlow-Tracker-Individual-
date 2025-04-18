import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import HomePage from './pages/home/HomePage';
import AddTransactionPage from './pages/addtransaction/AddTransactionPage';
import ViewExpense from './pages/viewexpense/ViewExpense'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="add-transaction" element={<AddTransactionPage />} />
          <Route path="view-expenses" element={<ViewExpense />} /> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
