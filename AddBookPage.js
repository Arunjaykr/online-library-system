import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/bookSlice';

const AddBookPage = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState(''); // Optional image URL
  const dispatch = useDispatch();

  const handleAddBook = (e) => {
    e.preventDefault();
    if (title && author) {
      dispatch(addBook({ title, author, image }));
      setTitle('');
      setAuthor('');
      setImage('');
    }
  };

  return (
    <form onSubmit={handleAddBook} className="add-book-form">
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Image URL (optional)"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookPage;
