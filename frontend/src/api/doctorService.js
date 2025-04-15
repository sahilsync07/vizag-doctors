import axios from 'axios'
// const BASE_URL = 'http://localhost:5000/api/doctors'
const BASE_URL = 'https://vizag-doctors.onrender.com/api/doctors'
// or

export const getAllDoctors = async () => {
  try {
    const res = await axios.get(BASE_URL)
    return res.data
  } catch (err) {
    console.error('Error fetching doctors:', err)
    return []
  }
}

export const updateDoctorById = async (id, updateData) => {
  try {
    await axios.put(`${BASE_URL}/${id}`, updateData)
  } catch (err) {
    console.error('Error updating doctor:', err)
  }
}

export const deleteDoctorById = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`)
  } catch (err) {
    console.error('Error deleting doctor:', err)
  }
}
