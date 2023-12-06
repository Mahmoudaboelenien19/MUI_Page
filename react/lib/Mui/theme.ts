import { createTheme } from "@mui/material";
import { green, grey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: grey[500],
    },
  },
});
