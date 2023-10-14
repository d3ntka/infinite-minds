/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
	container: {
		center: true,
		padding: {
			DEFAULT: '2rem',
			xl: '4rem'
		}
	},
	fontFamily: {
		'sans': ['"Exo 2"', ...defaultTheme.fontFamily.sans],
		'title': ['Ailerons', ...defaultTheme.fontFamily.sans],
	},
    colors: {
      light: "#f3ebbd",
      teal: "#42cac0",
      dark: "#092a3d",
      blue: "#144162",
	  gray: "#625d57",
	  black: "#000000",
	  white: "#ffffff",
	  inherit: "inherit",
	  transparent: "transparent",
    },
    extend: {},
  },
  plugins: [],
};
