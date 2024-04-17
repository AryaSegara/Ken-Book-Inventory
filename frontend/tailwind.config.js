const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx",
          flowbite.content()],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin()],
};
