// models/okr.model.js
import mongoose from 'mongoose';

const okrSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'OKR title is required'],
  },
  description: {
    type: String,
  },
  progress: {
    type: Number,
    default: 0,
    min: 0,
    max: 100,
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
  },
  organisation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organisation',
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
}, {
  timestamps: true,
});

const OKR = mongoose.model('OKR', okrSchema);
export default OKR;
