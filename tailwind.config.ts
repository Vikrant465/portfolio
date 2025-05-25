import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes :{
        light: {
            colors: {
              background: "#ffffff",
              foreground: "#000000",
              primary: "#3b82f6",
              secondary: "#64748b",

            },
          },
          dark: {
            colors: {
              background: "#0f172a",
              foreground: "#f8fafc",
              primary: "#60a5fa",
              secondary: "#94a3b8",
            },
          },
      }
    })
  ],
} satisfies Config;