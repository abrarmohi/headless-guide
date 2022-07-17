/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				'royal-blue': '#4434E0',
				cinder: '#161523',
				'steel-gray': '#222035',
				'blue-gem': '#5110AE',
				'dove-gray': '#666666',
				'dull-lavender': '#9E95EB',
				sun: '#F7AA0C',
				apple: '#2FB130',
				black: '#000000',
				white: '#FFFFFF'
			}
		}
	},
	plugins: [],
	darkMode: 'class'
}
