/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#D87D4A",
				secondary: "#FBAF85",
				darkBlack: "#101010",
				paleGray: "#F1F1F1",
				paleWhite: "#FAFAFA",
			},
			margin: {
				30: "120px",
			},
			backgroundImage: {
				heroMobile: "url('/images/image-header-mobile.jpg')",
				heroTablet: "url('/images/image-header-tablet.jpg')",
				heroDesktop: "url('/images/image-hero-desktop.jpg')",
				zx7Mobile: "url('/images/image-speaker-zx7-mobile.jpg')",
				zx7Tablet: "url('/images/image-speaker-zx7-tablet.jpg')",
				zx7Desktop: "url('/images/image-speaker-zx7-desktop.jpg')",
			},
		},
	},
	plugins: [],
};
