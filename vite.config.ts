import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	// base: "/plasmarad.me/",
	plugins: [sveltekit()]
};

export default config;