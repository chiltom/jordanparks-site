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
        primary: "#0f172a",
        secondary: "#1e293b",
        accent: "#6a0dad",
        accentLight: "#8a2be2",
        neonBlue: "#0ea5e9",
        neonPink: "#d16ba5",
        background: "#1a1a2e",
        cardBackground: "#162447",
        buttonText: "#f3f4f6",
        textPrimary: "#e0e7ff",
        textSecondary: "#cbd5e1",
      },
      boxShadow: {
        neon: '0 0 5px rgba(0, 255, 255, 0.5), 0 0 10px rgba(0, 255, 255, 0.5), 0 0 15px rgba(0, 255, 255, 0.5)',
        neonPink: '0 0 5px rgba(236, 72, 153, 0.5), 0 0 10px rgba(236, 72, 153, 0.5), 0 0 15px rgba(236, 72, 153, 0.5)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
