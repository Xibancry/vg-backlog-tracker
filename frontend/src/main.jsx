import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import HomePage from './components/HomePage.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>  
    <HomePage />
  </StrictMode>,
)
