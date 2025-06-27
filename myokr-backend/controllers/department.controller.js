
// controllers/department.controller.js
import Department from '../models/Department.js';
import mongoose from 'mongoose';

export const createDepartment = async (req, res) => {
  try {
    const { name, organisationId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(organisationId)) {
      return res.status(400).json({ message: 'Invalid organisation ID.' });
    }

    const dept = await Department.create({ name, organisation: organisationId });
    const populated = await dept.populate('organisation');

    res.status(201).json(populated);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getDepartments = async (req, res) => {
  const departments = await Department.find().populate('organisation');
  res.json(departments);
};

export const deleteDepartment = async (req, res) => {
  try {
    await Department.findByIdAndDelete(req.params.id);
    res.json({ message: 'Department deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting department', error: err.message });
  }
};
