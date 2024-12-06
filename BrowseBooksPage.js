import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, addToCart } from '../redux/bookSlice';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import '../styles/BrowseBookPage.css';

const BrowseBookPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  const books = useSelector((state) => state.books.books);
  const loading = useSelector((state) => state.books.loading);
  const error = useSelector((state) => state.books.error);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleAddToCart = (id) => {
    dispatch(addToCart(id));
  };

  const handleGoToCart = () => {
    navigate('/cart'); // Navigate to the cart page
  };

  return (
    <div className="browse-books-layout">
      {/* Books Section */}
      <div className="books-section">
        <h2>Available Books</h2>
        <div className="book-container">
          {loading && <p>Loading books...</p>}
          {error && <p>Error: {error}</p>}
          {books.length === 0 ? (
            <p>No books available</p>
          ) : (
            books.map((book) => (
              <div className="book-box" key={book.id}>
                <img
                  src={book.volumeInfo.imageLinks?.thumbnail}
                  alt={book.volumeInfo.title}
                  className="book-image"
                />
                <div className="book-title">{book.volumeInfo.title}</div>
                <div className="book-author">{book.volumeInfo.authors?.join(', ')}</div>
                <button onClick={() => handleAddToCart(book.id)}>Add to Cart</button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Cart Button Section */}
      <div className="cart-button-section">
        <button onClick={handleGoToCart} className="go-to-cart-button">
          Go to Cart
        </button>
      </div>
    </div>
  );
};

export default BrowseBookPage;
