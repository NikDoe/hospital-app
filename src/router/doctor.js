import { Router } from 'express';
import DoctorController from "../controllers/DoctorController.js";


const doctorRouter = Router();

doctorRouter.post('/', DoctorController.createDoctor);
doctorRouter.get('/', DoctorController.getAllDoctors);

export default doctorRouter;