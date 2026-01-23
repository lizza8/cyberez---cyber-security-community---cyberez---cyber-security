module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "rgb(var(--background))",
        foreground: "hsl(var(--foreground))",
        'cyber-blue': 'hsl(var(--cyber-blue))',
        'cyber-purple': 'hsl(var(--cyber-purple))',
        'cyber-red': 'hsl(var(--cyber-red))',
        'cyber-green': 'hsl(var(--cyber-green))',
        'neural-glow': 'hsl(var(--neural-glow))',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
  darkMode: ["class"],
};
