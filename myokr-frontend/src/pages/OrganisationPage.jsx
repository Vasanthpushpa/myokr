import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrganisationPage = () => {
  const [organisations, setOrganisations] = useState([]);
  const [newOrgName, setNewOrgName] = useState('');

  const fetchOrgs = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/organisations', {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setOrganisations(res.data);
    } catch (err) {
      console.error('Error fetching organisations:', err);
    }
  };

  const createOrg = async () => {
    try {
      if (!newOrgName.trim()) return;
      const res = await axios.post(
        'http://localhost:5000/api/organisations',
        { name: newOrgName },
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      setNewOrgName('');
      setOrganisations([...organisations, res.data]);
    } catch (err) {
      console.error('Error creating organisation:', err);
    }
  };

  const deleteOrg = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/organisations/${id}`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setOrganisations(organisations.filter((org) => org._id !== id));
    } catch (err) {
      console.error('Error deleting organisation:', err);
    }
  };

  useEffect(() => {
    fetchOrgs();
  }, []);

  return (
    <div>
      <h2>Organisations</h2>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={newOrgName}
          onChange={(e) => setNewOrgName(e.target.value)}
          placeholder="Enter organisation name"
          style={{
            padding: '8px',
            fontSize: '16px',
            marginRight: '8px',
            width: '250px',
          }}
        />
        <button onClick={createOrg} style={{ padding: '8px 16px' }}>
          Add Organisation
        </button>
      </div>

      <ul>
        {organisations.map((org) => (
          <li key={org._id} style={{ marginBottom: '12px' }}>
            <strong>{org.name}</strong>
            <button
              onClick={() => deleteOrg(org._id)}
              style={{
                marginLeft: '16px',
                background: 'red',
                color: 'white',
                border: 'none',
                padding: '6px 10px',
                cursor: 'pointer',
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

export default OrganisationPage;
