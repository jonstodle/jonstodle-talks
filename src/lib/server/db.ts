import { XATA_API_KEY } from '$env/static/private';
import { XataClient } from './xata';

export const xataClient = new XataClient({
	apiKey: XATA_API_KEY
});
