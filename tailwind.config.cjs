/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ['class'],
  safelist: [
    "border-orange",
    "border-red",
    "border-blue",
    "border-light",
    "border-teal",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        xl: "4rem",
      },
    },
    fontFamily: {
      sans: ['"Exo 2"', ...defaultTheme.fontFamily.sans],
      title: ["Ailerons", ...defaultTheme.fontFamily.sans],
    },
    colors: {
      light: "#f3ebbd",
      teal: "#42cac0",
      dark: "#092a3d",
      blue: "#144162",
      orange: "#ee8b16",
      red: "#ca1629",
      gray: "#625d57",
      black: "#000000",
      white: "#ffffff",
      inherit: "inherit",
      transparent: "transparent",
    },
    extend: {
      borderWidth: {
        3: "3px",
      },
      outlineWidth: {
        3: "3px",
      },
	  animation: {
		'colors': 'colors 6s ease infinite',
	  },
	  keyframes: ({theme}) => ({
		'colors': {
			'0%, 100%': { color: theme('colors.light')},
			'25%': { color: theme('colors.orange')},
			'50%': { color: theme('colors.red')},
			'75%': { color: theme('colors.teal')},
		}
	  })
    },
  },
  plugins: [
    function ({ addBase, addComponents, addUtilities, theme }) {
      addBase({
        h1: {
          //   lineHeight: '1.1',
        },
        p: {
          //   lineHeight: '1.5'
        },
      });
      addComponents({
        ".img-cover": {
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
          height: "100%",
        },
        ".img-contain": {
          objectFit: "contain",
          objectPosition: "center",
          width: "100%",
          height: "100%",
        },
      });
      addUtilities({
        ".svg-current": {
          "& svg path": {
            transitionProperty: theme("transitionProperty.colors"),
            transitionDuration: "300ms",
            fill: "currentColor",
          },
        },
        ".grid-stack": {
          display: "grid",
          gridTemplateAreas: '"stack"',
          gridTemplateRows: "1fr",
          gridTemplateColumns: "1fr",
        },
        ".grid-stack-child": {
          gridArea: "stack",
        },
        ".text-last-right": {
          textAlignLast: "right",
        },
      });
    },
    function ({ addVariant }) {
      addVariant("svg", ["&>svg"]);
      addVariant("i", ["&>i"]);
    },
  ],
};
