import axios from 'axios'

// const BASE_URL = 'http://localhost:5000/api/hospitals'
const BASE_URL = 'https://vizag-doctors.onrender.com/api/hospitals'

// Fetch all hospitals
export const getAllHospitals = async () => {
  try {
    const res = await axios.get(BASE_URL)
    return res.data
  } catch (err) {
    console.error('Error fetching hospitals:', err)
    return []
  }
}

// Update hospital's active or featured status
export const updateHospitalById = async (id, updateData) => {
  try {
    await axios.put(`${BASE_URL}/${id}`, updateData)
  } catch (err) {
    console.error('Error updating hospital:', err)
  }
}

// Delete a hospital by ID
export const deleteHospitalById = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`)
  } catch (err) {
    console.error('Error deleting hospital:', err)
  }
}
