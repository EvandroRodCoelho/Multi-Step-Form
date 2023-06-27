import React from 'react';
import ReactDOM from 'react-dom/client';
import "./main.css";
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { UserProvider } from './context/userContext';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserProvider> 
      <RouterProvider router={router}  />
    </UserProvider>
  </React.StrictMode>,
)
