import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1e3a8a', // blue-800
          light: '#3b82f6',   // blue-500
          dark: '#1e40af',    // blue-900
        },
      },
    },
  },
  plugins: [],
} satisfies Config