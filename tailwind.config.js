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
        extend: {
            typography: {
                DEFAULT: {
                  css: {
                    'code::before': {
                      content: '&nbsp;&nbsp;',
                    },
                    'code::after': {
                      content: '&nbsp;&nbsp;',
                    },
                    code: {
                        background: '#ffeff0',
                        wordWrap: 'break-word',
                        boxDecorationBreak: 'clone',
                        padding: '.1rem .3rem .2rem',
                        borderRadius: '.2rem',
                      }
                  },
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
    safelist: [
        'bg-orange-500',
        'text-orange-500'
    ]
};