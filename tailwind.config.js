import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          "bright-blue": "hsl(220, 98%, 61%)",
          "check-background": "hsl(233, 11%, 84%)",
        },
        neutral: {
          light: {
            "very-light-gray": "hsl(0, 0%, 98%)",
            "very-light-grayish-blue": "hsl(236, 33%, 92%)",
            "light-grayish-blue": "hsl(233, 11%, 84%)",
            "dark-grayish-blue": "hsl(236, 9%, 61%)",
            "very-dark-grayish-blue": "hsl(235, 19%, 35%)",
            "very-dark-blue": "hsl(212, 21%, 14%)",
          },
          dark: {
            "very-dark-blue": "hsl(235, 21%, 11%)",
            "very-dark-desaturated-blue": "hsl(235, 24%, 19%)",
            "light-grayish-blue": "hsl(234, 39%, 85%)",
            "light-grayish-blue-hover": "hsl(236, 33%, 92%)",
            "dark-grayish-blue": "hsl(234, 11%, 52%)",
            "very-dark-grayish-blue": "hsl(233, 14%, 35%)",
            "very-dark-grayish-blue-lighter": "hsl(236, 9%, 61%)",
          },
        },
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
