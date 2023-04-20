/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            gridTemplateColumns: {
                "text": "255px 255px 170px",
            }
        },
    },
    plugins: [],
}
