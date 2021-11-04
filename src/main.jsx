import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//context
import { ThemeProvider } from './context/theme';
import { AuthProvider } from './context/auth';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
