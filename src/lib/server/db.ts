import type { D1Database } from '@cloudflare/workers-types';
import type { Talk } from '$lib/server/models';

export const db = (db: D1Database) => ({
	async getTalks(): Promise<Talk[]> {
		let talks: Talk[] = [];

		try {
			const result = await db.prepare('select * from talks order by date').all<Talk>();

			if (!result.success) {
				console.error('Failed to fetch talks', result.error);
			} else {
				talks = result.results ?? [];
			}
		} catch (e) {
			console.error('DB connection crashed', e);
		}

		return talks;
	}
});
