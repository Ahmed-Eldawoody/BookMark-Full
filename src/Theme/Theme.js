import { createMuiTheme } from "@material-ui/core/styles";
//
//
//  Colors
// # Primary #
const SoftBlue = "hsl(231, 69%, 60%)";
const SoftRed = "hsl(0, 94%, 66%)";
// # Neutral #
const GrayishBlue = "hsl(229, 8%, 60%)";
const VeryDarkBlue = "hsl(229, 31%, 21%)";
// "
//
export const theme = createMuiTheme({
  palette: {
    // type: "dark",
    common: {
      // Primary
      SoftBlue: SoftBlue,
      SoftRed: SoftRed,
      // Neutral
      GrayishBlue: GrayishBlue,
      VeryDarkBlue: VeryDarkBlue,
    },
    primary: {
      main: SoftBlue,
    },
    secondary: {
      main: SoftRed,
    },
  },
  typography: {
    h3: {
      fontFamily: "Rubik",
      fontWeight: 500,
      color: VeryDarkBlue,
    },
    h4: {
      fontFamily: "Rubik",
      fontWeight: 500,
      color: VeryDarkBlue,
    },
    h5: {
      fontFamily: "Rubik",
      fontWeight: 500,
      letterSpacing: 5,
    },
    h6: {
      fontFamily: "Rubik",
      fontWeight: 500,
      color: VeryDarkBlue,
    },
    subtitle1: {
      fontFamily: "Rubik",
      fontWeight: 400,
      color: GrayishBlue,
    },
    subtitle2: {
      fontFamily: "Rubik",
      fontWeight: 400,
      color: GrayishBlue,
    },
    body1: {
      fontFamily: "Rubik",
      fontWeight: 500,
    },
    body2: {
      fontFamily: "Rubik",
      fontWeight: 400,
      color: GrayishBlue,
    },
    button: {
      fontFamily: "Rubik",
    },
  },
});
