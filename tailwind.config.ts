import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        lightBlue: "#9DD9F3",
        lightPink: "#FFB6C1",
        lightPurple: "#C3B5FF",
        textPrimary: "#ffffff",
        textSecondary: "#cbd5e1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
