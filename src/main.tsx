import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClientProvider } from 'react-query';
import { ColorsTheme, GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import queryClient from './services/queryClient';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <GlobalStyle />
      <ThemeProvider theme={ColorsTheme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </QueryClientProvider>
);
