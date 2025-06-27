import mongoose from 'mongoose';

const organisationSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }
}, { timestamps: true });

export default mongoose.model('Organisation', organisationSchema);
