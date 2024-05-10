import { type Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

export default {
  content: ["./src/**/*.tsx",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        '128': '32rem',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
,
} satisfies Config;
