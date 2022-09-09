import DoctorService from "../services/DoctorService.js";

class DoctorController {
	async createDoctor(req, res) {
		try {
			const doctor = await DoctorService.createDoctor(req.body);
			res.send(doctor);
		} catch (e) {
			console.log(e);
		}
	}

	async getAllDoctors(req, res) {
		try {
			const doctors = await DoctorService.getAllDoctors();
			return res.json(doctors);
		} catch (e) {
			console.log(e);
		}
	}

}

export default new DoctorController();