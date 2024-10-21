import React from 'react';
import ReactDOM from 'react-dom/client';  // Use createRoot from react-dom/client
import App from './App';
import './App.css'; // Optional: to include styles

// Find the root element in your HTML
const rootElement = document.getElementById('root');

// Create a root and render the app
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
