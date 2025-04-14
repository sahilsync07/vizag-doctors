import Hospital from '../models/Hospital.js'
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

const getAllHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.find()
    res.json(hospitals)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const addHospital = async (req, res) => {
  try {
    const { name, services, description, featured, active } = req.body
    const imageUrl = await uploadImage(req.file, 'hospitals')

    const hospital = new Hospital({
      name,
      services,
      description,
      image: imageUrl,
      featured,
      active,
    })

    await hospital.save()
    res.status(201).json(hospital)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const updateHospital = async (req, res) => {
  try {
    const { id } = req.params
    const { name, services, description, featured, active } = req.body
    const hospital = await Hospital.findById(id)
    if (!hospital) return res.status(404).json({ message: 'Hospital not found' })

    const imageUrl = req.file ? await uploadImage(req.file, 'hospitals') : hospital.image

    hospital.name = name || hospital.name
    hospital.services = services || hospital.services
    hospital.description = description || hospital.description
    hospital.featured = featured !== undefined ? featured : hospital.featured
    hospital.active = active !== undefined ? active : hospital.active
    hospital.image = imageUrl || hospital.image

    await hospital.save()
    res.json(hospital)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const deleteHospital = async (req, res) => {
  try {
    const { id } = req.params
    const hospital = await Hospital.findById(id)
    if (!hospital) return res.status(404).json({ message: 'Hospital not found' })

    await hospital.remove()
    res.json({ message: 'Hospital deleted' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export { getAllHospitals, addHospital, updateHospital, deleteHospital }
