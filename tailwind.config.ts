import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#F8FAFC",
        surface: "#FFFFFF",
        ink: "#0F172A",
        muted: "#475569",
        borderline: "#E2E8F0",
        primary: "#2563EB",
        secondary: "#10B981"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
