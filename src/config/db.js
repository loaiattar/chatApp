import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const dbURI = 'mongodb://localhost:27017/chatdb'; // MongoDB URI
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process if connection fails
  }
};

export default connectDB; // Default export

