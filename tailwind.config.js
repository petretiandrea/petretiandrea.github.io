module.exports = {
    darkMode: "class",
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
    safelist: [
        'bg-orange-500',
        'text-orange-500'
    ]
};