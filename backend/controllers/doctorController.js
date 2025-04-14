import Doctor from '../models/Doctor.js'
import cloudinary from '../utils/cloudinary.js'

// Helper function for image upload
const uploadImage = async (file, folder) => {
  if (!file) return null
  try {
    const uploadedImage = await cloudinary.uploader.upload(file.path, { folder })
    return uploadedImage.secure_url
  } catch (err) {
    throw new Error('Error uploading image', err)
  }
}

const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find()
    res.json(doctors)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const addDoctor = async (req, res) => {
  try {
    const { name, specialization, experience, description, featured, active } = req.body
    const imageUrl = await uploadImage(req.file, 'doctors')

    const doctor = new Doctor({
      name,
      specialization,
      experience,
      description,
      image: imageUrl,
      featured,
      active,
    })

    await doctor.save()
    res.status(201).json(doctor)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params
    const { name, specialization, experience, description, featured, active } = req.body
    const doctor = await Doctor.findById(id)
    if (!doctor) return res.status(404).json({ message: 'Doctor not found' })

    const imageUrl = req.file ? await uploadImage(req.file, 'doctors') : doctor.image

    doctor.name = name || doctor.name
    doctor.specialization = specialization || doctor.specialization
    doctor.experience = experience || doctor.experience
    doctor.description = description || doctor.description
    doctor.featured = featured !== undefined ? featured : doctor.featured
    doctor.active = active !== undefined ? active : doctor.active
    doctor.image = imageUrl || doctor.image

    await doctor.save()
    res.json(doctor)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params
    const doctor = await Doctor.findById(id)
    if (!doctor) return res.status(404).json({ message: 'Doctor not found' })

    await doctor.remove()
    res.json({ message: 'Doctor deleted' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export { getAllDoctors, addDoctor, updateDoctor, deleteDoctor }
