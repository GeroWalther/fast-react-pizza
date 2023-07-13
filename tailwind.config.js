/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // overwrites everything in that category and applies to the whole app
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    extend: {
      //keeps originals but adds new custom classes to tailwind
      height: {
        //overrides here this one class
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
