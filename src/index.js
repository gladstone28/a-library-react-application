import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // If you have any CSS for styling
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Ensure your index.html has a root div with id 'root'
);
