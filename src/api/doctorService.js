import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api/doctors'

export const getAllDoctors = async () => {
  try {
    const res = await axios.get(BASE_URL)
    return res.data
  } catch (err) {
    console.error('Error fetching doctors:', err)
    return []
  }
}

// Add more methods if needed later (like getById, updateDoctor etc.)
