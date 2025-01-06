/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import { themes as daisyThemes } from "daisyui/src/theming/themes";
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";
//asas
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  daisyui: {
    themes: [
      {
        lofi: {
          ...daisyThemes["lofi"],
          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "1.9rem",
        },
        black: {
          ...daisyThemes["black"],
          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "1.9rem",
          secondary: "#e5e5e5",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [typography, daisyui],
};
