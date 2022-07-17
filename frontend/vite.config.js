import { sveltekit } from '@sveltejs/kit/vite'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import Icons from 'unplugin-icons/vite'

const _dirname =
	typeof __dirname !== 'undefined' ? __dirname : dirname(fileURLToPath(import.meta.url))

/** @type {import('vite').UserConfig} */
const config = {
	resolve: {
		alias: {
			'@': resolve(_dirname, './src'),
			'@lib': resolve(_dirname, './src/lib'),
			'@stores': resolve(_dirname, './src/lib/stores'),
			'@components': resolve(_dirname, './src/lib/components')
		}
	},
	server: {
		port: 3000
	},
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte'
		})
	]
}

export default config
