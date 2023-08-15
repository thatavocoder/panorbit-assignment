import type { Config } from "tailwindcss"
import { Noto_Sans } from "next/font/google"

const NotoSansFont = Noto_Sans({
  weight: ["400", "500", "700"],
}).style

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3260C9",
        secondary: "#702CC8",
        background: "#FFFEFE",
        backgroundDark: "#F6F6F6",
        textTitle: "#545454",
        textBody: "#4B4A4B",
        white: "#FFFFFF",
        divider: "#D4D4D5",
        grey: "#BCC4D4",
      },
      borderRadius: {
        "right-top": "0 20px 20px 0",
        "right-bottom": "20px 0 0 20px",
      },
    },
  },
  plugins: [],
}
export default config
