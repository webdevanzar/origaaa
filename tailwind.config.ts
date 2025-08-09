import { passionone } from "@/app/layout";
import type { Config } from "tailwindcss";
import scrollbarHide from 'tailwind-scrollbar-hide'


const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        passionone: "var(--font-passionone)",
      },
      colors: {
        btn: "#25ab79",
        btnEnd: "#9c7a3d",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "aurora-gradient": "linear-gradient(135deg, #3A29FF, #FF94B4, #FF3232)",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 20s linear infinite",
        "infinite-scroll-right": "infinite-scroll-right 20s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "infinite-scroll-right": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [scrollbarHide],
};

export default config;
