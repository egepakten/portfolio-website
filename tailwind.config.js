/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          dark: "#0a192f",
          light: "#112240",
        },
        accent: {
          cyan: "#64ffda",
          teal: "#00d9ff",
        },
      },
      animation: {
        typewriter: "typewriter 2s steps(40) 1s forwards",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        typewriter: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #64ffda, 0 0 10px #64ffda" },
          "100%": {
            boxShadow: "0 0 10px #64ffda, 0 0 20px #64ffda, 0 0 30px #64ffda",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
    },
  },
  plugins: [],
};
