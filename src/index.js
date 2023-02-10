import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { GlobalStyles } from 'components/styles/GlobalStyles';
import { Global, ThemeProvider } from '@emotion/react';
import 'modern-normalize/modern-normalize.css';
import { theme } from 'components/styles/theme';
// import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
