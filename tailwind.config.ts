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
        primary: "#0073b1",
        secondary: "#005582",
        background: "#f4f4f4",
        navbarBackground: "#ffffff",
        buttonBackground: "#0073b1",
        buttonText: "#ffffff",
        linkText: "#0073b1",
        linkHover: "#005582",
        textPrimary: "#333333",
        textSecondary: "#666666",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
