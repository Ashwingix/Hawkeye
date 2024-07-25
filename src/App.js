import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/login';
import MainPage from './components/MainPage';
import Profile from './components/profile';
import Layout from './components/Layout';

const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(true);

  // Initialize userLoggedIn state from sessionStorage
  useEffect(() => {
    const loggedIn = sessionStorage.getItem('loggedIn') === 'true';
    setUserLoggedIn(loggedIn);
  }, []);

  const handleLogin = () => {
    setUserLoggedIn(true);
    sessionStorage.setItem('loggedIn', 'true');
  };

  const handleLogout = () => {
    setUserLoggedIn(false);
    sessionStorage.removeItem('loggedIn');
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route element={<Layout onLogout={handleLogout} />}>
          <Route path="/Home" element={userLoggedIn ? <MainPage /> : <Navigate to="/" />} />
          <Route path="/Profile" element={userLoggedIn ? <Profile /> : <Navigate to="/" />} />
          {/* Add more protected routes here */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
