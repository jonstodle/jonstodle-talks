import { Client } from 'pg';

const client = new Client({
	connectionString: process.env['DB_CONNECTION_STRING']
});
client.connect();

export const getTalks = async () => {
	try {
		const result = await client.query('select * from talks order by date desc');
		console.log(result);
		return result.rows;
	} catch (e) {
		console.error(e);
	}
};
