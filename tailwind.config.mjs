import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"primary": "#151515",
				"secondary": "#222222",
				"grey": "#444444",
				"description": "#666666",
				"selected": "#D9D9D9"
			}
		},
	},
	plugins: [animations],
}
