import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/login';
import MainPage from './components/MainPage';
import Profile from './components/profile';
import Layout from './components/Layout';
import ManageUser from './components/ManageUser';
import ManageMasterData from './components/ManageMasterData';
import ManageLibrary from './components/ManageLibrary';
import TaskManagement from './components/TaskManagement';
import B2MManagement from './components/B2MManagement';
import KnowledgeGraph from './components/KnowledgeGraph';
import TechAdmin from './components/TechAdmin';

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
          <Route path="/ManageUser" element={userLoggedIn ? <ManageUser /> : <Navigate to="/" />} />
          <Route path="/ManageMasterData" element={userLoggedIn ? <ManageMasterData /> : <Navigate to="/" />} />
          <Route path="/ManageLibrary" element={userLoggedIn ? <ManageLibrary /> : <Navigate to="/" />} />
          <Route path="/TaskManagement" element={userLoggedIn ? <TaskManagement /> : <Navigate to="/" />} />
          <Route path="/B2MManagement" element={userLoggedIn ? <B2MManagement /> : <Navigate to="/" />} />
          <Route path="/KnowledgeGraph" element={userLoggedIn ? <KnowledgeGraph /> : <Navigate to="/" />} />
          <Route path="/TechAdmin" element={userLoggedIn ? <TechAdmin /> : <Navigate to="/" />} />
          {/* Add more protected routes here */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
