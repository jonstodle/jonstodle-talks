import { createClient } from '@supabase/supabase-js';
import type { Talk } from '$lib/types';

const apiUrl = 'https://vxnnwdqdzmlfeihwhhnk.supabase.co';
const apiKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODUzNzUyMywiZXhwIjoxOTU0MTEzNTIzfQ.epyCVRVNDgfuBJUBZ5TzoiLPY7HEHyzbicXeChEbYKI';

const supabase = createClient(apiUrl, apiKey);

export const getTalks = async () => {
	const { data, error } = await supabase
		.from<Talk>('talks')
		.select('*')
		.order('date', { ascending: false });
	if (error) {
		throw error;
	}

	return data;
};
