import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api/hospitals'

// Fetch all hospitals
export const getAllHospitals = async () => {
  try {
    const res = await axios.get(BASE_URL) // No dynamic parameter here, just the base URL for all hospitals
    return res.data
  } catch (err) {
    console.error('Error fetching hospitals:', err)
    return []
  }
}

// Fetch a hospital by ID (if you need this functionality)
export const getHospitalById = async (id) => {
  try {
    if (!id) throw new Error('ID is required') // Ensure ID is passed
    const res = await axios.get(`${BASE_URL}/${id}`) // ID should be appended correctly
    return res.data
  } catch (err) {
    console.error('Error fetching hospital by ID:', err)
    return null
  }
}
