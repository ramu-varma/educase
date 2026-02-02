/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#6C25FF',
                'primary-hover': '#5818da',
                'primary-light': '#F4EEFF', // Light purple for backgrounds
                text: '#1D1D35', // Dark text
                'text-secondary': '#6E6E80', // Grey text
                border: '#E0E0E0',
                error: '#FF4D4F',
            },
            fontFamily: {
                sans: ['"Inter"', 'sans-serif'], // Or Rubik as per plan, let's stick to Inter for now or add Google Font later
            },
            borderRadius: {
                'xl': '12px',
                '2xl': '16px',
            }
        },
    },
    plugins: [],
}
