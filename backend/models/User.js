const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  companyName: { type: String },
  email: { type: String, required: true, unique: true },
  companyEmail: { type: String, unique: true },
  passwordHash: { type: String },
  role: { type: String, enum: ['HR', 'Recruiter', 'HR+Recruiter'], required: true },
  rbAccess: { type: String },
  googleId: { type: String },
  profilePicUrl: { type: String },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },
  createdAt: { type: Date, default: Date.now }
},{ timestamps: true });

module.exports = mongoose.model('User', UserSchema);
