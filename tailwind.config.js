/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        sidebarHeight: "calc(100vh - 63px)",
      },
      colors: {
        primary: "#1C2030",
        secondary: "#8D909833",
        "db-orange": "#FF7700",
        "db-text": "#C3C3C3",
        "db-text-primary": "#8D9098",
      },
      fontFamily: {
        segoeRegular: ["SegoeRegular", "sans-serif"],
        segoeLight: ["SegoeLight", "sans-serif"],
        segoeSemibold: ["SegoeSemibold", "sans-serif"],
        segoeSmallLight: ["SmallLight", "sans-serif"],
      },
      boxShadow: {
        cardShadow: "0px 4px 4px #00000005",
      },
    },
  },
  plugins: [],
};
