import React from 'react';
import './Dashboard.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const dummyOKRs = [
  { title: 'Launch Marketing Campaign', progress: 70 },
  { title: 'Improve Website Performance', progress: 45 },
  { title: 'Hire 3 Developers', progress: 90 },
  { title: 'Increase User Retention', progress: 55 }
];

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/logout', {}, {
        withCredentials: true
      });

      localStorage.removeItem('userInfo');
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="header">
        <h1>Welcome to your OKR Dashboard</h1>
        <p>Track and manage your goals with clarity</p>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="dashboard-content">
        <div className="okr-section">
          <h2>My OKRs</h2>
          <div className="okr-list">
            {dummyOKRs.map((okr, index) => (
              <div className="okr-card" key={index}>
                <p className="okr-title">{okr.title}</p>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${okr.progress}%` }}
                  ></div>
                </div>
                <span className="progress-percent">{okr.progress}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="team-section">
          <h2>Team Progress</h2>
          <div className="team-progress-placeholder">
            Team analytics coming soon...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
