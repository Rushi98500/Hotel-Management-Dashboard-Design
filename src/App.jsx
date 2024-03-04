// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from './components/Dashboard';
import PageNotFound from './components/PageNotFound';
import { Navigate } from 'react-router-dom';

function App() {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <BrowserRouter>
      <Routes>
  {isAuthenticated ? (
    <>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Navigate replace to="/dashboard" />} />
      {/* Define other protected routes here */}
    </>
  ) : (
    <Route path="*" element={<PageNotFound />} />
  )}
</Routes>
    </BrowserRouter>
  );
}

export default App;
