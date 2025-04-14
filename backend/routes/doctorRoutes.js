import express from 'express'
import multer from 'multer'
import {
  getAllDoctors,
  addDoctor,
  updateDoctor,
  deleteDoctor,
} from '../controllers/doctorController.js'

const router = express.Router()

const upload = multer({ dest: 'uploads/doctors/' })

router.get('/', getAllDoctors)
router.post('/', upload.single('image'), addDoctor)
router.put('/:id', upload.single('image'), updateDoctor)
router.delete('/:id', deleteDoctor)

export default router
