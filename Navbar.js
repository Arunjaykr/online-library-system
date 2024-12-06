import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Include Navbar CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Online Library System</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/browse-books">Browse Books</Link></li>
        <li><Link to="/add-book">Add Book</Link></li>
        <li><Link to="/cart">Cart</Link></li> {/* Add Cart Link */}
      </ul>
    </nav>
  );
};

export default Navbar;
