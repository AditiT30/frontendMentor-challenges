/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
//content array must include all files where Tailwind classes are used. If a file is missing, its classes won’t be applied.