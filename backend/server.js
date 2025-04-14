import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import multer from 'multer'

import doctorRoutes from './routes/doctorRoutes.js'
import hospitalRoutes from './routes/hospitalRoutes.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

// Multer setup for file uploads
const upload = multer({ dest: 'uploads/' }) // File upload destination
app.use(upload.single('image')) // Set upload for image

app.use('/api/doctors', doctorRoutes)
app.use('/api/hospitals', hospitalRoutes)

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected')
    app.listen(5000, () => console.log('Server running on port 5000'))
  })
  .catch((err) => console.log(err))
