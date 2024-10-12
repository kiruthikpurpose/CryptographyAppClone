import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// Fallback page for unmatched routes
			fallback: '404.html'
		}),
		paths: {
			// Dynamically set base path depending on the environment
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH || ''
		}
	},
	// Preprocessing with Vite
	preprocess: vitePreprocess()
};

export default config;
