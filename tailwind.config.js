/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src.css/*.css'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                main: ['Roboto', 'sans-serif'] 
            },
            height: {
                thin: '0.5px'
            },
            borderWidth: {
                thin: '0.5px'
            },
            gridTemplateRows: {
                layout: 'auto 1fr auto'
            },
            screens: {
                '4k': '2048px'
            }
        },
    },
    plugins: [],
}
