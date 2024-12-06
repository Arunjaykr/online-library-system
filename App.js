import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import BrowseBooksPage from './components/BrowseBooksPage';
import AddBookPage from './components/AddBookPage';
import CartPage from './components/CartPage'; // Import the Cart Page
import './styles/App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/browse-books" element={<BrowseBooksPage />} />
        <Route path="/add-book" element={<AddBookPage />} />
        <Route path="/cart" element={<CartPage />} /> {/* Cart Page */}
      </Routes>
      <footer>
        <p>&copy; 2024 Online Library System</p>
      </footer>
    </Router>
  );
}

export default App;
