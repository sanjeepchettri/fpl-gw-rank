const { default: gradient } = require("@material-tailwind/react/theme/components/timeline/timelineIconColors/gradient");
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors :{
        "fpl-gr" : "#00ff85",
        "fpl-pur" : "#37003c",
        "fpl-blue" : "#528fff",

      }
    },
  },
  plugins: [],
});