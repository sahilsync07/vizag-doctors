import mongoose from 'mongoose'

const hospitalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  services: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  featured: { type: Boolean, default: false },
  active: { type: Boolean, default: true },
})

export default mongoose.model('Hospital', hospitalSchema)
