import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import OrganisationPage from './pages/OrganisationPage';
import DepartmentPage from './pages/DepartmentPage';
import TeamPage from './pages/TeamPage';
import OKRPage from './pages/OKRPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="organisations" element={<OrganisationPage />} />
          <Route path="departments" element={<DepartmentPage />} />
          <Route path="teams" element={<TeamPage />} />
          <Route path="okrs" element={<OKRPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
