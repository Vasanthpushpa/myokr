// controllers/okr.controller.js
import OKR from '../models/okr.model.js';

export const createOKR = async (req, res) => {
  try {
    const okr = await OKR.create({ ...req.body, createdBy: req.user._id });
    res.status(201).json(okr);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getOKRs = async (req, res) => {
  try {
    const okrs = await OKR.find().populate('assignedTo team department organisation');
    res.status(200).json(okrs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOKRById = async (req, res) => {
  try {
    const okr = await OKR.findById(req.params.id).populate('assignedTo team department organisation');
    if (!okr) return res.status(404).json({ message: 'OKR not found' });
    res.status(200).json(okr);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateOKR = async (req, res) => {
  try {
    const okr = await OKR.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!okr) return res.status(404).json({ message: 'OKR not found' });
    res.status(200).json(okr);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteOKR = async (req, res) => {
  try {
    const okr = await OKR.findByIdAndDelete(req.params.id);
    if (!okr) return res.status(404).json({ message: 'OKR not found' });
    res.status(200).json({ message: 'OKR deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
