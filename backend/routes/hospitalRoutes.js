import express from 'express'
import multer from 'multer'
import {
  getAllHospitals,
  addHospital,
  updateHospital,
  deleteHospital,
} from '../controllers/hospitalController.js'

const router = express.Router()

const upload = multer({ dest: 'uploads/hospitals/' })

router.get('/', getAllHospitals)
router.post('/', upload.single('image'), addHospital)
router.put('/:id', upload.single('image'), updateHospital)
router.delete('/:id', deleteHospital)

export default router
