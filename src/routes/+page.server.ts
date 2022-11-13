import type { PageServerLoad } from './$types';
import { xataClient } from '$lib/server/db';

export const load: PageServerLoad = async () => {
	return {
		talks: await xataClient.db.talks.sort('date', 'desc').getAll()
	};
};
