import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Correct in React 18+
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
