import React from 'react';
import Library from './components/Library';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'; // For styling

function App() {
  return (
    <div className="app">
      <Header />
      <Library />
      <Footer />
    </div>
  );
}

export default App;
