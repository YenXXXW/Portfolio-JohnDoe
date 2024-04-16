/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                Nunito: ['Nunito Sans', 'sans-serif'],
                Josefin: ['Josefin Sans', 'sans-serif'],
                Tilt: ['Tilt Neon', 'sans-serif'],
            },
        },
    },
    plugins: [require('daisyui')],
};
