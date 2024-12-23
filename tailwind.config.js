/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				mono: [" DepartureMono", "monospace"],
				source: ["Source Sans Pro", "sans-serif"]
			},
			colors: {
				custom: {
					yellow: "#FFDC73",
					gray: "#524B4B"
				}
			}
		}
	},
	plugins: []
}
