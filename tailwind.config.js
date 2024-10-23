/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#D87D4A",
				secondary: "#FBAF85",
				text: "#101010",
				paleGray: "#F1F1F1",
				paleWhite: "#FAFAFA",
			},
		},
	},
	plugins: [],
};
