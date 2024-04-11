import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './comp/Home/HomePage';
import Checkout from './comp/Checkout/Checkout';
import Login from './comp/Login/Login';
import Contact from './comp/Contact/Contact';
import NavBar from './comp/Nav/Nav';
import Offers from './comp/Orders/Offers';


function App() {
  return (
    <Router>
      <div className="app">
        {window.location.pathname === '/' && <NavBar />}
        <Routes>
          <Route path="/" element={<HomePage/>} /> {/* Home page */}
          <Route path="/checkout" element={<Checkout />} /> {/* Checkout page */}
          <Route path="/login" element={<Login />} /> {/* Login page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact page */}
          <Route path="/Offers" element={<Offers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
