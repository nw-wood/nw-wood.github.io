import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals'; skip

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// to log results (for example: reportWebVitals(console.log))
// or analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
