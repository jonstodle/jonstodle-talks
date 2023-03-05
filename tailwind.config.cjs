/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        body: "Atkinson Hyperlegible, sans-serif",
        mono: "JetBrains Mono, monospace"
      }
    }
  },
  plugins: []
};
