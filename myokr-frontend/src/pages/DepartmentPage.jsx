import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DepartmentPage = () => {
  const [departments, setDepartments] = useState([]);
  const [organisations, setOrganisations] = useState([]);
  const [newDeptName, setNewDeptName] = useState('');
  const [selectedOrgId, setSelectedOrgId] = useState('');

  // Fetch departments
  const fetchDepartments = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/departments');
      setDepartments(res.data);
    } catch (err) {
      console.error('Error fetching departments:', err);
    }
  };

  // Fetch organisations
  const fetchOrganisations = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/organisations');
      setOrganisations(res.data);
    } catch (err) {
      console.error('Error fetching organisations:', err);
    }
  };

  // Create department
  const createDepartment = async () => {
    if (!newDeptName.trim() || !selectedOrgId) return;
    try {
      const res = await axios.post('http://localhost:5000/api/departments', {
        name: newDeptName,
        organisationId: selectedOrgId,
      });
      setNewDeptName('');
      setSelectedOrgId('');
      setDepartments([...departments, res.data]);
    } catch (err) {
      console.error('Error creating department:', err?.response?.data || err.message);
    }
  };

  // Delete department
  const deleteDepartment = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/departments/${id}`);
      setDepartments(departments.filter((dept) => dept._id !== id));
    } catch (err) {
      console.error('Error deleting department:', err);
    }
  };

  useEffect(() => {
    fetchDepartments();
    fetchOrganisations();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Departments</h2>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Department name"
          value={newDeptName}
          onChange={(e) => setNewDeptName(e.target.value)}
          style={{ padding: '8px', marginRight: '10px', width: '200px' }}
        />

        <select
          value={selectedOrgId}
          onChange={(e) => setSelectedOrgId(e.target.value)}
          style={{ padding: '8px', marginRight: '10px' }}
        >
          <option value="">Select organisation</option>
          {organisations.map((org) => (
            <option key={org._id} value={org._id}>
              {org.name}
            </option>
          ))}
        </select>

        <button onClick={createDepartment} style={{ padding: '8px 16px' }}>
          Add Department
        </button>
      </div>

      <ul>
        {departments.map((dept) => (
          <li key={dept._id} style={{ marginBottom: '12px' }}>
            <strong>{dept.name}</strong> - Org: {dept.organisation?.name || 'Unknown'}
            <button
              onClick={() => deleteDepartment(dept._id)}
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

export default DepartmentPage;
