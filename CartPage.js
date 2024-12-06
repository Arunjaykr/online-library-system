import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/bookSlice';
import '../styles/CartPage.css'; // Add CSS for the cart page

const CartPage = () => {
  const cart = useSelector((state) => state.books.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cart.map((book) => (
            <div className="cart-item" key={book.id}>
              <p>
                <strong>{book.volumeInfo.title}</strong> by{' '}
                {book.volumeInfo.authors?.join(', ')}
              </p>
              <button onClick={() => handleRemoveFromCart(book.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
