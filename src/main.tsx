import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClientProvider } from 'react-query';
import { GlobalStyle } from './styles/global';
import queryClient from './services/queryClient';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </QueryClientProvider>
);
