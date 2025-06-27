import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>MyOKR</h2>
        <nav>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/organisations">Organisations</Link>
          <Link to="/departments">Departments</Link>
          <Link to="/teams">Teams</Link>
          <Link to="/okrs">OKRs</Link>
        </nav>
      </aside>
      <main className="main-content">
        <header className="topbar">
          <p>Welcome to MyOKR</p>
        </header>
        <div className="content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
