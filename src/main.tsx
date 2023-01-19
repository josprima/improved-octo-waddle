import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import '@libs/i18n';

import './styles/index.css';
import './styles/css-reset.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
