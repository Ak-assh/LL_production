/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#2563eb", 700: "#1d4ed8" },   // primary
        accent: "#22c55e",                                // secondary
        bg: { DEFAULT: "#0b1220", surface: "#0f172a", subtle: "#111827" },
        text: { DEFAULT: "#e5e7eb", muted: "#9ca3af" },
        border: "#1f2937",
        warn: "#f59e0b",
        danger: "#ef4444",
      },
      boxShadow: { soft: "0 6px 20px rgba(0,0,0,0.15)" }
    },
  },
  plugins: [],
};
