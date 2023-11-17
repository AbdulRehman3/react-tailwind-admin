/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx}',
		'./node_modules/flowbite-react/lib/**/*.{js,jsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#14A79A',
				'primary-100': '#E8FEFA',
				'primary-300': '#00AA98',
				'primary-500': '#00867A',
				'primary-600': '#00665C',
			},
			screens: {
				'2md': '940px',
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};
