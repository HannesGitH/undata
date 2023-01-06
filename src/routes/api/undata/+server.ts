import { error } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

import * as sdmx from 'sdmx-rest';

export const GET: RequestHandler = async ({ url }) => {
	const query = { flow: 'EXR', key: 'A.CHF.EUR.SP00.A' };
    const data = await sdmx.request(query, 'ECB');

	return new Response(String(data));
};
