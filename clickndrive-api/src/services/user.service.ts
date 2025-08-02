import { User } from '../models/user.model';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

export const getAllUsers = async () => User.find();

export const getUserById = async (id: string) => User.findById(id);

export const createUser = async (data: any) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = new User({
    _id: uuidv4(),
    ...data,
    password: hashedPassword,
    registrationDate: new Date(),
    lastAccess: new Date(),
    isActive: true,
  });

  return user.save();
};

export const updateUser = async (id: string, data: any) => {
  if (data.password) {
    data.password = await bcrypt.hash(data.password, 10);
  }
  return User.findByIdAndUpdate(id, data, { new: true });
};

export const deleteUser = async (id: string) => User.findByIdAndDelete(id);

export const deactivateUser = async (id: string) => 
  User.findByIdAndUpdate(id, { isActive: false }, { new: true });
