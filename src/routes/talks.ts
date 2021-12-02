import { getTalks } from '$lib/db';

export async function get() {
	let talks = [];

	try {
		talks = await getTalks();
	} catch (e) {
		console.error(e);
	}

	return talks;
}
