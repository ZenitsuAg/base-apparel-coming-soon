/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                josefin: "'Josefin Sans'"
            },
            colors: {
                "desaturated-red": "hsl(0, 36%, 70%)",
                "soft-red": "hsl(0, 93%, 68%)",

                "dark-grayish-blue": "hsl(0, 6%, 24%)",
            },
            backgroundImage: {
                "desktop-banner": "url('./images/bg-pattern-desktop.svg')"
            }
        },
    },
    plugins: [],
}

