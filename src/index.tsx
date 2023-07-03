import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store/index';
import { Provider } from 'react-redux';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './styles/global.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
