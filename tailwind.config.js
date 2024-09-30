const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "../../*.php",
    "../../src/**/*.php",
    "../../modules/**/*.{php,.twig.html}",
    "../../resources/**/*.twig.html",
    "../../themes/**/*.twig.html",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
        colors: {
            yellow: colors.amber,

            gray: {
                100: 'hsl(0, 2%, 98%)',
                200: 'hsl(0, 2%, 95%)',
                300: 'hsl(0, 1%, 92%)',
                400: 'hsl(0, 1%, 84%)',
                500: 'hsl(0, 1%, 69%)',
                600: 'hsl(0, 2%, 52%)',
                700: 'hsl(0, 2%, 35%)',
                800: 'hsl(0, 3%, 23%)',
                900: 'hsl(0, 3%, 14%)',
            },

            purple: {
                50: 'rgb(245, 243, 255)',
                100: 'rgb(237, 233, 254)',
                200: 'rgb(221, 214, 254)',
                300: 'rgb(196, 181, 253)',
                400: 'rgb(167, 139, 250)',
                500: 'rgb(139, 92, 246)',
                600: 'rgb(125, 62, 234)',
                700: 'rgb(109, 48, 207)',
                800: 'rgb(93, 45, 170)',
                900: 'rgb(79, 37, 141)',
                950: 'rgb(48, 25, 93)',
            },

            red: {
                100: 'rgb(255, 245, 245)',
                200: 'rgb(254, 215, 215)',
                300: 'rgb(254, 178, 178)',
                400: 'rgb(252, 129, 129)',
                500: 'rgb(245, 101, 101)',
                600: 'rgb(229, 62, 62)',
                700: 'rgb(197, 48, 48)',
                800: 'rgb(155, 44, 44)',
                900: 'rgb(116, 42, 42)',
            },
        },
    },
  },
  plugins: [],

  safelist: [
    "px-4",
    // {
    //   pattern:
    //     /bg-(purple|blue|indigo|green|yellow|orange|red|pink|violet)-(100|200|300|400|500|600)/,
    //   variants: ["hover"],
    // },
  ],
};
