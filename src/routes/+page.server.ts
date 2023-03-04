import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import type { App } from '../app';

export const load = (async ({ platform }) => {
	const cloudflare = platform as App.Platform;
	return {
		talks: await db(cloudflare.env!.DB).getTalks()
	};
}) satisfies PageServerLoad;
