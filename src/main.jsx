import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
//import { store } from './store/Store.js';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./contexts/AuthProvider";

// Create the query client instance
const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  // <StrictMode>

        <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthProvider>
      <App />
    </AuthProvider>
        </BrowserRouter>
        </QueryClientProvider>

  // </StrictMode>
);