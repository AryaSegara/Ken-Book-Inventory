// import flowbite from "(flowbite-react/tailwind)";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx",
          'node_module/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [import ("flowbite/plugin")],
};
