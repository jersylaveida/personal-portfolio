import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#F8FAFC",
        blush: "#F472B6",
        rosewood: "#A855F7",
        sage: "#C4B5FD",
        porcelain: "#12001F",
        champagne: "#E9D5FF",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(168, 85, 247, 0.20)",
        glow: "0 0 34px rgba(236, 72, 153, 0.32)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
