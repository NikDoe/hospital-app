import { doctorRepo } from '../utils/utils.js';

class DoctorService {
	async createDoctor (doctor) {
		const newDoctor = doctorRepo.create(doctor);
		await doctorRepo.save(newDoctor);
		return newDoctor;
	}

	async getAllDoctors () {
		const allDoctors = await doctorRepo.find();
		return allDoctors;
	}
}

export default new DoctorService();
