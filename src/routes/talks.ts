import { getTalks } from '$lib/data';

export const get = async () => {
	return {
		body: await getTalks()
	};
};
