import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm brown — matches the logo text
        brown: {
          50:  "#f9f6f2",
          100: "#f0e9df",
          200: "#e0d0bc",
          300: "#ccb197",
          400: "#b69272",
          500: "#9a7555",
          600: "#7d5c3e",
          700: "#5e4430",  // primary dark brown (logo text)
          800: "#4a3424",
          900: "#392819",
        },
        // Muted gold — matches the botanical wreath
        gold: {
          50:  "#fdf9ef",
          100: "#faf1d6",
          200: "#f4e0ab",
          300: "#e9c97a",
          400: "#ddb24e",  // main gold accent
          500: "#c89830",
          600: "#a87a22",
          700: "#875e1a",
          800: "#6b4917",
          900: "#573a15",
        },
        // Warm cream — backgrounds
        cream: {
          50:  "#faf6ee",
          100: "#f5ede0",
          200: "#ecddc8",
          300: "#e0c9a8",
          400: "#d1b388",
          500: "#bf9c6a",
        },
        // Soft warm blush — light pastel accent
        blush: {
          50:  "#fdf5f0",
          100: "#fae8de",
          200: "#f5cebc",
          300: "#edac93",
          400: "#e28a6a",
          500: "#d46c4c",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans:  ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
