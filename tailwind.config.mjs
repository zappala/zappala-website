/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			default: "#1a202c",
			byu: "#002e5d",
			red: "#b22222",
			lightblue: "#3182ce",
			yellow: "#ffcd00",
			bluey: "#182b49",
			yellow: colors.yellow,
			red: colors.red,
			blue: colors.blue,
			sky: colors.sky,
			slate: colors.slate,
			gray: colors.gray,
			white: colors.white,
			black: colors.black,
		  },
		  extend: {
			fontFamily: {
			  arvo: ['"Arvo"', "sans-serif"],
			  gothic: ['"Gothic A1"', "sans-serif"]
			},
			backgroundImage: {
				'hero-pattern': "url('/images/timp1.jpeg')",
			  }
		},
	},
	plugins: [],
}
