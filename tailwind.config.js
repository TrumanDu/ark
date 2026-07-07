module.exports = {
  content: [
    "./src/pages/**/*.tsx",
    "./src/components/**/*.tsx",
    "./src/layouts/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          DEFAULT: "#D4942A",
          light: "#E8B44D",
          dark: "#B07A1E",
        },
      },
      fontFamily: {
        display: ['"Outfit"', '"Noto Sans SC"', "system-ui", "sans-serif"],
        body: ['"Lora"', '"Noto Sans SC"', "Georgia", "serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      keyframes: {
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "slide-up": "slideUp 0.5s ease-out forwards",
        "bounce-slow": "bounce 2.5s infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
