import DoctorService from "../services/DoctorService.js";
import {doctorRepo} from "../utils/utils.js";

class DoctorController {
	async createDoctor(req, res) {
		try {
			const doctor = await DoctorService.createDoctor(req.body);
			res.json(doctor);
		} catch (e) {
			console.log(e);
		}
	}

	async getAllDoctors(req, res) {
		try {
			const allDoctors = await doctorRepo.find();
			return res.json(allDoctors);
		} catch (e) {
			console.log(e);
		}
	}

}

export default new DoctorController();