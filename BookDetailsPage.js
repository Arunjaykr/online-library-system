import React from 'react'; // Make sure this is at the top
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BookDetailsPage() {
  const { id } = useParams();
  const book = useSelector((state) => state.books.books.find((b) => b.id === id));

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Description: {book.description}</p>
      <p>Rating: {book.rating}</p>
      <Link to="/browse-books">Back to Browse</Link>
    </div>
  );
}

export default BookDetailsPage;
