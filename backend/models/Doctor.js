import mongoose from 'mongoose'

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  experience: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  featured: { type: Boolean, default: false },
  active: { type: Boolean, default: true },
})

export default mongoose.model('Doctor', doctorSchema)
