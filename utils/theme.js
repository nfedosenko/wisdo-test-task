import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#8b5ffe",
      light: "#f1eeff",
    },
    secondary: {
      main: "#f1eeff",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
        padding: "5px 30px",
        height: 40,
        margin: "5px 10px",
      },
      containedSecondary: {
        color: "#8b5ffe",
        "&:hover": {
          backgroundColor: "#8b5ffe",
          color: "#ffffff",
        },
      },
    },
  },
});
