import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neubrutalist Palette
        mustard: "#F5C518",
        "mustard-light": "#FDE68A",
        "mustard-dark": "#D4A80F",
        cream: "#FDF8F0",
        "cream-light": "#FEFDF8",
        "cream-dark": "#F5EBD8",
        navy: "#1A1A2E",
        "navy-light": "#24243E",
        "navy-dark": "#0F0F1A",
        
        // Accent colors (flat, no gradients)
        "hot-orange": "#FF6B35",
        "sky-blue": "#00B4D8",
        "coral-red": "#FF3D5A",
        "lime-green": "#A8E600",
        "electric-purple": "#B866FF",
        
        // Text
        "text-black": "#000000",
        "text-dark-gray": "#333333",
        "text-gray": "#666666",
        "text-light-gray": "#999999",
        "text-white": "#FFFFFF",
        
        // Borders
        "border-black": "#000000",
        "border-dark": "#1A1A1A",
        
        // Semantic
        primary: "#F5C518",
        secondary: "#1A1A2E",
        accent: "#FF6B35",
        background: "#FDF8F0",
        surface: "#FFFFFF",
        "surface-alt": "#FDF8F0",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        display: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      borderWidth: {
        "3": "3px",
        "4": "4px",
        "5": "5px",
        "6": "6px",
      },
      boxShadow: {
        "brutal": "4px 4px 0px 0px #000000",
        "brutal-sm": "2px 2px 0px 0px #000000",
        "brutal-lg": "6px 6px 0px 0px #000000",
        "brutal-accent": "4px 4px 0px 0px #000000",
      },
      borderRadius: {
        "brutal": "6px",
        "brutal-sm": "4px",
        "brutal-lg": "8px",
        "brutal-none": "0px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "slide-in": "slideIn 0.5s ease-out forwards",
        "pop-in": "popIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        popIn: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;