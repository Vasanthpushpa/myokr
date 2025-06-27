import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OKRPage = () => {
  const [okrs, setOkrs] = useState([]);
  const [teams, setTeams] = useState([]);
  const [newOKR, setNewOKR] = useState({ objective: '', keyResults: '', team: '', progress: 0 });

  useEffect(() => {
    fetchOKRs();
    fetchTeams();
  }, []);

  const fetchOKRs = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/okrs');
      setOkrs(res.data);
    } catch (err) {
      console.error('Error fetching OKRs:', err);
    }
  };

  const fetchTeams = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/teams');
      setTeams(res.data);
    } catch (err) {
      console.error('Error fetching teams:', err);
    }
  };

  const createOKR = async () => {
    try {
      if (!newOKR.objective || !newOKR.keyResults || !newOKR.team) return;
      const res = await axios.post('http://localhost:5000/api/okrs', newOKR);
      setOkrs([...okrs, res.data]);
      setNewOKR({ objective: '', keyResults: '', team: '', progress: 0 });
    } catch (err) {
      console.error('Error creating OKR:', err);
    }
  };

  const deleteOKR = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/okrs/${id}`);
      setOkrs(okrs.filter((okr) => okr._id !== id));
    } catch (err) {
      console.error('Error deleting OKR:', err);
    }
  };

  return (
    <div>
      <h2>OKRs</h2>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Objective"
          value={newOKR.objective}
          onChange={(e) => setNewOKR({ ...newOKR, objective: e.target.value })}
          style={{ padding: '8px', marginRight: '10px', width: '200px' }}
        />
        <input
          type="text"
          placeholder="Key Results (comma separated)"
          value={newOKR.keyResults}
          onChange={(e) => setNewOKR({ ...newOKR, keyResults: e.target.value })}
          style={{ padding: '8px', marginRight: '10px', width: '250px' }}
        />
        <select
          value={newOKR.team}
          onChange={(e) => setNewOKR({ ...newOKR, team: e.target.value })}
          style={{ padding: '8px', marginRight: '10px' }}
        >
          <option value="">Select Team</option>
          {teams.map((team) => (
            <option key={team._id} value={team._id}>
              {team.name}
            </option>
          ))}
        </select>
        <button onClick={createOKR} style={{ padding: '8px 16px' }}>
          Add OKR
        </button>
      </div>

      <ul>
        {okrs.map((okr) => (
          <li key={okr._id} style={{ marginBottom: '10px' }}>
            <strong>Objective:</strong> {okr.objective} <br />
            <strong>Key Results:</strong> {okr.keyResults.join(', ')} <br />
            <strong>Progress:</strong> {okr.progress}% <br />
            <button
              onClick={() => deleteOKR(okr._id)}
              style={{
                marginTop: '5px',
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

export default OKRPage;
