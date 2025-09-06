import type { Config } from "tailwindcss";

const config: Config & any = {
  content: ["./src/**/*.{ts,tsx,js,jsx,html}", "./app/**/*.{ts,tsx,js,jsx,html}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        headerBg: "var(--headerBg)",
        headerText: "var(--headerText)",
        border: "var(--border)",
        txtColor: "var(--txtColor)",
        txtColorSecondary: "var(--txtColorSecondary)",
      },
      boxShadow: {
        "custom-shadow": "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      },
    },
  },
  plugins: [],
};

export default config;
