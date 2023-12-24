import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './assets/style/index.css';
import './assets/style/utils.css';
import { GlobalProvider } from './context/useGlobalContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
);
