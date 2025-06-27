import mongoose from 'mongoose';

const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  organisation: { type: mongoose.Schema.Types.ObjectId, ref: 'Organisation', required: true }
}, { timestamps: true });

export default mongoose.model('Department', departmentSchema);
