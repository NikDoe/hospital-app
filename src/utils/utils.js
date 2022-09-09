import {AppDataSource} from "../db.js";
import Doctor from "../models/Doctor.js";

const doctorRepo = AppDataSource.getRepository(Doctor);

export {doctorRepo}