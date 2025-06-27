import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="logo">MyOKR</h2>
        <nav>
          <ul>
            <li>🏠 Dashboard</li>
            <li>📁 My OKRs</li>
            <li>👥 Teams</li>
            <li>🏢 Organisation</li>
            <li>⚙️ Settings</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="dashboard-header">
          <h1>Welcome to your OKR Dashboard</h1>
          <p>Track and manage your goals with clarity</p>
        </header>
        <section className="cards-section">
          <div className="card">
            <h3>My OKRs</h3>
            <p>View and manage your objectives.</p>
          </div>
          <div className="card">
            <h3>Team Progress</h3>
            <p>Monitor your team's performance.</p>
          </div>
          <div className="card">
            <h3>Reports</h3>
            <p>Visualise OKR tracking over time.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
