import { sveltekit } from '@sveltejs/kit/vite';
import GithubActionsReporter from 'vitest-github-actions-reporter';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	test: {
		reporters: process.env.GITHUB_ACTIONS ? ['default', new GithubActionsReporter()] : 'default',
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
