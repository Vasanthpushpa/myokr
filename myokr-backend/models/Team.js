// models/Team.js
import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },

  // Use plain string for department name
  department: { type: String, required: true }, // 👈 no ObjectId

  // Members as an array of strings (e.g., names or emails)
  members: [{ type: String }], // 👈 no ObjectId

}, { timestamps: true });

export default mongoose.model('Team', teamSchema);
