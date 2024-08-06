import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/login';
import MainPage from './components/MainPage';
import Profile from './components/profile';
import Layout from './components/Layout';
import ListOfUser from './ManageUser/ListOfUser';
import CdnClient from './ManageUser/CdnClient';
import { Subject, Topic } from '@mui/icons-material';
import Difficulty from './ManageMasterData/Difficulty';
import Evidence from './ManageMasterData/Evidence';
import Medium from './ManageMasterData/Medium';
import MediaLib from './ManageLibrary/MediaLib';
import Chapter from './ManageMasterData/Chapter';
import TaskList from './TaskManagement/TaskList';
import CreateArchives from './TaskManagement/CreateArchives';
import RequirementArchives from './B2M/RequirementArchives';
import ViewRequirement from './B2M/ViewRequirement';
import { List } from '@mui/material';
import Grade from './ManageMasterData/Grade';
import Competency from './ManageMasterData/Competency';
import KnowledgeSubject from './KnowledgeGraph/Subject';
import MasterSubject from './ManageMasterData/Subject';
import MasterTopic from './ManageMasterData/MasterTopic';
import QuestionLib from './ManageLibrary/QustionLib';
import AddQuestions from './ManageLibrary/AddQustions';
import AddMedia from './ManageLibrary/AddMedia';
import TextbookLib from './ManageLibrary/TextbookLib';
import AddTextbook from './ManageLibrary/AddTextbook';
import AddTasks from './TaskManagement/AddTasks';
import AddRequirement from './B2M/AddRequirement';

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
          <Route path="/ManageUser/ListOfUser" element={userLoggedIn ? <ListOfUser /> : <Navigate to="/" />} />
          <Route path="/ManageUser/CdnClient" element={userLoggedIn ? <CdnClient /> : <Navigate to="/" />} />
          <Route path="/ManageMasterData/MasterSubject" element={userLoggedIn ? <MasterSubject /> : <Navigate to="/" />} />
          <Route path="/ManageMasterData/Grade" element={userLoggedIn ? <Grade /> : <Navigate to="/" />} />
          <Route path="/ManageMasterData/Chapter" element={userLoggedIn ? <Chapter /> : <Navigate to="/" />} />
          <Route path="/ManageMasterData/Difficulty" element={userLoggedIn ? <Difficulty /> : <Navigate to="/" />} />
          <Route path="/ManageMasterData/Evidence" element={userLoggedIn ? <Evidence /> : <Navigate to="/" />} />
          <Route path="/ManageMasterData/MasterTopic" element={userLoggedIn ? <MasterTopic /> : <Navigate to="/" />} />
          <Route path="/ManageMasterData/Medium" element={userLoggedIn ? <Medium /> : <Navigate to="/" />} />
          <Route path="/ManageMasterData/Competency" element={userLoggedIn ? <Competency /> : <Navigate to="/" />} />
          
          <Route path="/ManageLibrary/MediaLib" element={userLoggedIn ? <MediaLib /> : <Navigate to="/" />} />
          <Route path="/ManageLibrary/AddMedia" element={userLoggedIn ? <AddMedia /> : <Navigate to="/" />} />
          <Route path="/ManageLibrary/QuestionLib" element={userLoggedIn ? <QuestionLib /> : <Navigate to="/" />} />
          <Route path="/ManageLibrary/AddQuestions" element={userLoggedIn ? <AddQuestions /> : <Navigate to="/" />} />
          <Route path="/ManageLibrary/TextbookLib" element={userLoggedIn ? <TextbookLib /> : <Navigate to="/" />} />
          <Route path="/ManageLibrary/AddTextbook" element={userLoggedIn ? <AddTextbook /> : <Navigate to="/" />} />
          
          <Route path="/TaskManagement/TaskList" element={userLoggedIn ? <TaskList /> : <Navigate to="/" />} />
          <Route path="/TaskManagement/AddTasks" element={userLoggedIn ? <AddTasks /> : <Navigate to="/" />} />
          <Route path="/TaskManagement/CreateArchives" element={userLoggedIn ? <CreateArchives /> : <Navigate to="/" />} />
          
          <Route path="/B2MManagement/AddRequirement" element={userLoggedIn ? <AddRequirement /> : <Navigate to="/" />} />
          <Route path="/B2MManagement/ViewRequirement" element={userLoggedIn ? <ViewRequirement /> : <Navigate to="/" />} />
          <Route path="/B2MManagement/RequirementArchives" element={userLoggedIn ? <RequirementArchives /> : <Navigate to="/" />} />
         
          <Route path="/KnowledgeGraph/KnowledgeSubject" element={userLoggedIn ? <KnowledgeSubject /> : <Navigate to="/" />} />
          <Route path="/TechAdmin/List" element={userLoggedIn ? <List /> : <Navigate to="/" />} /> 
         
         
          
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
