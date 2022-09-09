import { DataSource } from 'typeorm';
import Doctor from "./models/Doctor.js";

export const AppDataSource = new DataSource({
	type: 'postgres',
	url: process.env.DATABASE_URL,
	entities: [Doctor],
	ssl: {
		rejectUnauthorized: false
	},
	synchronize: true,
	logging: false,
});
