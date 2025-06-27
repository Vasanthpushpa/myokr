// controllers/organisation.controller.js

import Organisation from '../models/Organisation.js';

export const createOrganisation = async (req, res) => {
  const { name } = req.body;
  const org = await Organisation.create({ name });
  res.status(201).json(org);
};

export const getOrganisations = async (req, res) => {
  const orgs = await Organisation.find();
  res.json(orgs);
};

export const deleteOrganisation = async (req, res) => {
  try {
    const { id } = req.params;
    const org = await Organisation.findById(id);

    if (!org) {
      return res.status(404).json({ message: 'Organisation not found' });
    }

    await org.deleteOne(); // or org.remove()
    res.status(200).json({ message: 'Organisation deleted successfully' });
  } catch (error) {
    console.error('Error deleting organisation:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
