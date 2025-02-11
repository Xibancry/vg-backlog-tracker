import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import HomePage from './components/HomePage.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import LoginPage from './components/LoginPage.jsx';
import SignUpPage from './components/SignUpPage.jsx';
import {BrowserRouter as Router, Route, Link, useNavigate, BrowserRouter, Routes } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header /><HomePage /><Footer /></>} />
        <Route path="/login" element={<><Header /><LoginPage /><Footer /></>} />
        <Route path="/signup" element={<><Header /><SignUpPage /><Footer /></>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
