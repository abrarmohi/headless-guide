import adapter from 'svelte-adapter-static-digitalocean'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true
	}),

	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			spec: '.do/spec.yaml',
			name: ''
		})
	}
}

export default config
