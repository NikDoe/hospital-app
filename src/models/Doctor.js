import { EntitySchema } from 'typeorm';

export default new EntitySchema({
	name: 'Doctor',
	tableName: 'Doctors',
	columns: {
		id: {
			primary: true,
			type: 'int',
			generated: true,
		},
		fullName: {
			type: 'text',
		},
		specialization: {
			type: 'varchar',
		},
		office: {
			type : 'int',
		},
		receptionTime: {
			type: 'json',
			array: false,
		},
	},
});