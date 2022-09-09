import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { AppDataSource } from './db.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
	res.json({message : "hospital app"})
});

const start = async () => {
	try {
		await AppDataSource.initialize()
			.then(() => {
				console.log('база данных подключена');
			})
			.catch(error => console.log(error));
		await app.listen(PORT, () => {
			console.log(`сервер запущен на порту ${PORT}`);
		});
	} catch (e) {
		console.log(e);
	}
};

start();
