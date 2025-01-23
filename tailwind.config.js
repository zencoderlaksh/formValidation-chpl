// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "rgb-start": "rgb(255, 0, 0)", // Red
        "rgb-middle": "rgb(0, 255, 0)", // Green
        "rgb-end": "rgb(0, 0, 255)", // Blue
      },
      animation: {
        "rgb-gradient": "rgbGradient 5s ease infinite", // Set animation to run infinitely
      },
      keyframes: {
        rgbGradient: {
          "0%": {
            background:
              "linear-gradient(45deg, rgb(255, 0, 0), rgb(0, 255, 0))",
          },
          "25%": {
            background:
              "linear-gradient(45deg, rgb(0, 255, 0), rgb(0, 0, 255))",
          },
          "50%": {
            background:
              "linear-gradient(45deg, rgb(0, 0, 255), rgb(255, 0, 0))",
          },
          "75%": {
            background:
              "linear-gradient(45deg, rgb(255, 0, 0), rgb(0, 255, 0))",
          },
          "100%": {
            background:
              "linear-gradient(45deg, rgb(0, 255, 0), rgb(0, 0, 255))",
          },
        },
      },
    },
  },
  plugins: [],
};
