/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            gridTemplateColumns: {
                "text": "375px 375px 250px",
            }
        },
    },
    plugins: [],
}
