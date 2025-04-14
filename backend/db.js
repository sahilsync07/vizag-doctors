import mongoose from 'mongoose'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

// MongoDB connection URI from environment variables
const dbURI = process.env.MONGODB_URI

// Function to connect to the MongoDB cluster
const connectDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('MongoDB connected successfully')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message)
    process.exit(1) // Exit process with failure code
  }
}

export default connectDB
