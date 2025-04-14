import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import doctorRoutes from './routes/doctorRoutes.js'
import hospitalRoutes from './routes/hospitalRoutes.js'

// Load environment variables
dotenv.config()

const app = express()

// Middleware
app.use(express.json()) // to parse JSON bodies
app.use(express.urlencoded({ extended: true })) // to parse form data

// Routes
app.use('/api/doctors', doctorRoutes)
app.use('/api/hospitals', hospitalRoutes)

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.log('Error connecting to MongoDB: ', err))

// Set port
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
