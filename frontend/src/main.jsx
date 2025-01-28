import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import HomePage from './components/HomePage.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import LoginPage from './components/LoginPage.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {BrowserRouter as Router, Route, Link, useNavigate, BrowserRouter, Routes } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header /><HomePage /><Footer /></>} />
        <Route path="/LoginPage" element={<><Header /><LoginPage /><Footer /></>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
