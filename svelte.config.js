import dotenv from 'dotenv';
dotenv.config();

import adapterAuto from '@sveltejs/adapter-auto';
import adapterNode from '@sveltejs/adapter-node';

import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: PROCESS.ENV.ADAPTER === 'node' ? adapterNode({ out: 'dist' }) : adapterAuto()
	}
};

export default config;
