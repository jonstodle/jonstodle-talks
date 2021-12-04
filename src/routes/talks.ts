import { getTalks } from '$lib/data';

export const get = async () => {
	let body;

	try {
		body = {
			data: await getTalks()
		};
	} catch (e) {
		body = {
			error: e
		};
	}

	return {
		body
	};
};
