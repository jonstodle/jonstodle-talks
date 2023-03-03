import type { D1Database } from '@cloudflare/workers-types';
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	interface Platform {
		env?: {
			DB: D1Database;
		};
	}
}
