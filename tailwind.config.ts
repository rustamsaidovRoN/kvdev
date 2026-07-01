import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0b0b0c",
          900: "#0b0b0c",
          800: "#111113",
          700: "#17171a",
          600: "#202024",
          500: "#2a2a2f",
        },
        bone: {
          DEFAULT: "#f1eee7",
          muted: "#a5a199",
          dim: "#6b685f",
        },
        gold: {
          DEFAULT: "#bfa06a",
          soft: "#d8c095",
          deep: "#8f7748",
        },
        hair: "rgba(241,238,231,0.10)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        widest2: "0.28em",
        widest3: "0.42em",
      },
      maxWidth: {
        edge: "1680px",
      },
      keyframes: {
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(22px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "k-zoom": {
          from: { transform: "scale(1.04)" },
          to: { transform: "scale(1.15)" },
        },
      },
      animation: {
        "fade-in": "fade-in 1.1s ease forwards",
        "fade-up": "fade-up 1s cubic-bezier(0.22,1,0.36,1) forwards",
        marquee: "marquee 42s linear infinite",
        "k-zoom": "k-zoom 16s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
