import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

import baseSchema from '#api/models/baseSchema.js';

export interface IUser {
  _id: mongoose.Types.ObjectId;
  name: string;
  age?: number;
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String, required: true },
    age: { type: Number },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

baseSchema(userSchema, ['password']);

export const UserModel = mongoose.model('User', userSchema);
