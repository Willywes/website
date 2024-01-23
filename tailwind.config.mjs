/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				'handWave': {
					'0%': { transform: 'rotate(-10deg)' },
					'25%': { transform: 'scale(0.9)  rotate(10deg)' },
					'50%': { transform: 'rotate(-15deg)' },
					'75%': { transform: ' rotate(10deg)' },
					'100%': { transform: 'rotate(-10deg)' },
				},
			},
			animation: {
				'handWave': 'handWave 2s ease-in-out infinite',
			},
		},
	},
	plugins: [],
}
