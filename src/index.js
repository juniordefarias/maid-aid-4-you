import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

/* if we dont need two themes, then we stop using "ThemeContextProvider" */
import { ThemeContextProvider } from './contexts/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
