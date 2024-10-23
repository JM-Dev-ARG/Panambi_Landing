import typography from "@tailwindcss/typography";
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			/* 			screens: {
							sm: "480px",
							md: "768px",
							lg: "976px",
							xl: "1440px",
						}, */
			colors: {
				black: "#000000",
				white: "#F9F9F9",
				gray: "#0D0C22",
				stone: "#231F20",
				lime: "#B9FF66",
				zinc: {
					100: "#F3F3F3",
					200: "#F0F0F0",
					300: "#D9D9D9",
					400: "#D8D8D8",
					500: "#898989",
					600: "#B0B0B0",
					700: "#787878",
					800: "#292A32",
					900: "#191A23",
				},
				verde: {
					100: "#daddc3",
					200: "#445e53",
					300: "#d2df8a",
					400: "#003f36",
					500: "#254441",
				},
				violeta: {
					100: "#6b4494",
					200: "#aa8abf",
					300: "#857993",
				}
			},
			boxShadow: {
				'card': '0px 5px 0px 0px #191A23',
				'btn': '0px 5px 0px 0px #857993'
			},

			fontFamily: {
				Poppins: ['Poppins']
			},
			gradientColorStopPositions: {
				0: '0%',
				50: '50%',
				100: '100%'

			},

		},
	},
	plugins: [typography],
};