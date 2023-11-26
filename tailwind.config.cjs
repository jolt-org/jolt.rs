const { Config } = require("tailwindcss");

const config = {
  content: [
    "style.css",
    "./*.{js,ts,jsx,tsx,mdx,html}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "2rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "2rem" }],
      "2xl": ["1.5rem", { lineHeight: "2.5rem" }],
      "3xl": ["2rem", { lineHeight: "2.5rem" }],
      "4xl": ["2.5rem", { lineHeight: "3rem" }],
      "5xl": ["3rem", { lineHeight: "3.5rem" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
  },
  daisyui: {
    themes: [
      {
        jolt: {
          primary: "#f50057",
          secondary: "#202020",
          accent: "#a1ada1",
          neutral: "#1d1327",
          "base-100": "#fff9f1",
          info: "#bfdbfe",
          success: "#00f597",
          warning: "#fef08a",
          error: "#f36060",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
