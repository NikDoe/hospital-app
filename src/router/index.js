import { Router } from 'express';
import doctorRouter from "./doctor.js";

const router = Router();

router.use('/doctor', doctorRouter);

export default router;