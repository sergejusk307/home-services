import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectToDb = async () => {
  try {
    if (!process.env.DB_CONNECTION) {
      throw new Error('DB_CONNECTION is not defined');
    }

    await mongoose.connect(process.env.DB_CONNECTION);
    console.log('Connected to MongoDB with Mongoose');
  } catch (err) {
    console.error('Could not connect to the database', err);
    process.exit(1);
  }
};

export default connectToDb;
