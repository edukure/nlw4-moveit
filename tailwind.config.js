const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                digit: ["Rajdhani", ...defaultTheme.fontFamily.sans]
            },
            width: {
                panel: "30rem"
            },
            height: {
                panel: "32rem"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
