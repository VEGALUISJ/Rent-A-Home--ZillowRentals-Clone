import React from 'react';
import ReactDOM from 'react-dom';
import './assests/styles/index.css';
import App from './pages/App';
import Navbar from '../src/components/navbar'

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


