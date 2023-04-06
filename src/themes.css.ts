import { createGlobalTheme } from "@vanilla-extract/css";

import { vars } from "./vars.css";

const theme = createGlobalTheme(":root", vars, {
  color: {
    gray100: "#000000",
  },
});
