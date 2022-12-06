import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import ReactDOM from 'react-dom/client';
import theme from './styles/theme';
import { Routes } from './routes';
import React from 'react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
);
