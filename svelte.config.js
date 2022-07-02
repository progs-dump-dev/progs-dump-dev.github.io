import adapter from '@sveltejs/adapter-static';
import {sveltePreprocess} from "svelte-preprocess/dist/autoProcess.js";
import {resolve} from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		prerender: {default: true},
		adapter: adapter({
			pages:"docs",
			assets:"docs"
		}),
		vite:{
			resolve:{
				alias:{
					$components: resolve("./src/components")
				}
			}
		}
	},
	preprocess: sveltePreprocess()
};

export default config;
