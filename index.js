import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';  // Import the store from redux/store
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>  {/* Use the imported store */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
