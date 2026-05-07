/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],

  mode: "jit",

  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#ff0033",
        tertiary: "#120000",

        "black-100": "#050000",
        "black-200": "#000000",

        "white-100": "#f3f3f3",

        "terminal-bg": "#000000",
        "terminal-text": "#ff0033",
      },

      boxShadow: {
        card: "0px 35px 120px -15px rgba(255, 0, 51, 0.25)",
      },

      screens: {
        xs: "450px",
      },

      fontFamily: {
        minster: ["'UnifrakturCook'", "cursive"],
        mono: ["'JetBrains Mono'", "monospace"],
        geo: ["Geo", "sans-serif"],
      },

      keyframes: {
        glitch: {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "100%": { transform: "translate(0)" },
        },

        flicker: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.6 },
        },

        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },

      animation: {
        glitch: "glitch 0.15s infinite",
        flicker: "flicker 1.5s infinite",
        scan: "scan 6s linear infinite",
      },
    },
  },

  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".bg-terminal": {
          position: "relative",
          backgroundColor: "#020617",
          overflow: "hidden",
        },
      });
    },
  ],
};