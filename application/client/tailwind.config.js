/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        black: {
          100: "#000000",
          200: "#212121",
          300: "#363636",
          400: "#1A1A1A",
          500: "#242424",
          600: "#D1D1D1"
        },
        white: {
          100: "#ffffff",
          200: "#FBFBFB"
        },
        gray: {
          100: "#D9DDF5",
          200: "#9D9D9D",
          300: "#EBEBEB",
          400: "#888",
          500: "#E4E4E4",
          600: "#D9D9D9"
        },
        purple: {
          100: "#AD78EE",
          200: "#F1E5FF",
          300: "#A66EE9",
          400: "#E0AAFF",
          500: "#F1E7F7"
        },
        red: {
          100: "#FF3535"
        },
        green: {
          100: "#25B09B",
          200: "#32A63D"
        }
      },
      boxShadow: {
        header: "0px 1px 5px 0px rgba(0, 0, 0, 0.25)",
        "header-card": "0px 3.003px 12.124px 0px rgba(46, 67, 255, 0.10)",
        "text-field": "0px 3.269px 13.2px 0px rgba(46, 67, 255, 0.10)",
        "feature-card": "10px 10px 0px 0px rgba(0, 0, 0, 1)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(92deg, #FF73FB 0.49%, #B192F6 20.77%, #4988D3 60.18%, #69C0FF 99.78%)",
        "run-validator": "url(/img/run-validator-bg.svg)",
        "launch-price": "url(/img/launch-price-bg.svg)",
        "cypher-features": "url(/img/cypher-features-bg.svg)",
        "home-gradient": "conic-gradient(from 180deg at 50% 50%, rgba(217, 217, 217, 0.10) 0deg, rgba(41, 127, 255, 0.10) 0.035999999090563506deg, rgba(191, 56, 255, 0.10) 78.75deg, rgba(207, 104, 255, 0.10) 187.49999284744263deg, rgba(225, 40, 255, 0.10) 268.1250071525574deg, rgba(225, 161, 255, 0.10) 360deg)"
      }
    },
    fontFamily: {
      inter: ['"Inter"', "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
      interBold: ["Inter-Bold"],
      interSemiBold: ["Inter-SemiBold"],
      interMedium: ["Inter-Medium"],
      openSansBold: ["OpenSans-Bold"]
    },
    fontSize: {
      "label-40px-regular": ["40px", { lineHeight: "46px", fontWeight: "400" }],
      "label-40px-semibold": ["40px", { lineHeight: "46px", fontWeight: "500" }],
      "label-30px-semibold": ["30px", { lineHeight: "27px", fontWeight: "600" }],
      "label-30px-medium": ["30px", { lineHeight: "27px", fontWeight: "500" }],
      "label-24px-semibold": ["24px", { lineHeight: "40px", fontWeight: "600"}],
      "label-24px-medium": ["24px", { lineHeight: "40px", fontWeight: "500"}],
      "label-22px-regular": ["22px", { lineHeight: "40px", fontWeight: "400"}],
      "label-20px-bold": ["20px", { lineHeight: "28px", fontWeight: "bold" }],
      "label-20px-semibold": ["20px", { lineHeight: "28px", fontWeight: "600" }],
      "label-20px-regular": ["20px", { lineHeight: "28px", fontWeight: "500" }],
      "label-20px-medium": ["20px", { lineHeight: "28px", fontWeight: "400" }],
      "label-18px-bold": ["18px", { lineHeight: "26px", fontWeight: "bold" }],
      "label-18px-semibold": ["18px", { lineHeight: "26px", fontWeight: "600" }],
      "label-18px-medium": ["18px", { lineHeight: "26px", fontWeight: "500" }],
      "label-18px-regular": ["18px", { lineHeight: "26px", fontWeight: "400" }],
      "label-16px-medium": ["16px", { lineHeight: "24px", fontWeight: "500" }],
      "label-16px-regular": ["16px", { lineHeight: "24px", fontWeight: "400" }],
      "label-14px-regular": ["14px", { lineHeight: "normal", fontWeight: "400" }],
      "label-14px-medium": ["14px", { lineHeight: "normal", fontWeight: "500" }],
      "label-12px-medium": ["12px", { lineHeight: "normal", fontWeight: "500" }],
      "label-12px-regular": ["12px", { lineHeight: "normal", fontWeight: "bold", letterSpacing: "1.2px" }],
      "label-10px-medium": ["10px", { lineHeight: "normal", fontWeight: "500" }],
    }
  }
}

