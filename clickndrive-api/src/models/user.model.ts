import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  _id: {
    type: String, // UUID
    required: true
  },
  username: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true,
    minlength: 3
  },
  password: { 
    type: String, 
    required: true,
    minlength: [8, 'Password must be at least 8 characters long']
  },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address']
  },
  phoneNumber: {
    type: String,
    required: true,
    match: [/^\+?[0-9]{9,15}$/, 'Please provide a valid phone number']
  },
  firstName: { 
    type: String,
    trim: true
  },
  lastName: { 
    type: String,
    trim: true
  },
  birthDate: { 
    type: Date 
  },
  isActive: { 
    type: Boolean, 
    default: true 
  },
  lastAccess: { 
    type: Date, 
    default: Date.now 
  },
  profilePhoto: { 
    type: String, 
    default: null 
  },
  registrationDate: { 
    type: Date, 
    default: Date.now 
  },
}, { _id: false });

export const User = mongoose.model('User', UserSchema);
