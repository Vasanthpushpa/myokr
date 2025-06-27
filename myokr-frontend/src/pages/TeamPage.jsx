import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TeamPage = () => {
  const [teams, setTeams] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [newTeam, setNewTeam] = useState({ name: '', department: '' });

  useEffect(() => {
    fetchTeams();
    fetchDepartments();
  }, []);

  const fetchTeams = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/teams', {
        withCredentials: true,
      });
      setTeams(res.data);
    } catch (err) {
      console.error('Error fetching teams:', err);
    }
  };

  const fetchDepartments = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/departments', {
        withCredentials: true,
      });
      setDepartments(res.data);
    } catch (err) {
      console.error('Error fetching departments:', err);
    }
  };

  const createTeam = async () => {
    try {
      if (!newTeam.name || !newTeam.department) return;
      const res = await axios.post(
        'http://localhost:5000/api/teams',
        newTeam,
        {
          withCredentials: true,
        }
      );
      setTeams([...teams, res.data]);
      setNewTeam({ name: '', department: '' });
    } catch (err) {
      console.error('Error creating team:', err);
    }
  };

  const deleteTeam = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/teams/${id}`, {
        withCredentials: true,
      });
      setTeams(teams.filter((t) => t._id !== id));
    } catch (err) {
      console.error('Error deleting team:', err);
    }
  };

  return (
    <div>
      <h2>Teams</h2>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Team name"
          value={newTeam.name}
          onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })}
          style={{ padding: '8px', marginRight: '10px', width: '200px' }}
        />
        <select
          value={newTeam.department}
          onChange={(e) => setNewTeam({ ...newTeam, department: e.target.value })}
          style={{ padding: '8px', marginRight: '10px' }}
        >
          <option value="">Select Department</option>
          {departments.map((dept) => (
            <option key={dept._id} value={dept._id}>
              {dept.name}
            </option>
          ))}
        </select>
        <button onClick={createTeam} style={{ padding: '8px 16px' }}>
          Add Team
        </button>
      </div>

      <ul>
        {teams.map((team) => (
          <li key={team._id} style={{ marginBottom: '10px' }}>
            {team.name} (Dept ID: {team.department})
            <button
              onClick={() => deleteTeam(team._id)}
              style={{
                marginLeft: '10px',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamPage;
