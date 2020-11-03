import React from "react";
//
//
import { Link } from "react-router-dom";
//
//
import { Grid, Typography, useMediaQuery, Button } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
//
//
import logo from "../../images/logo-bookmark-footer.svg";
import facebookIcon from "../../images/icon-facebook.svg";
import twitterIcon from "../../images/icon-twitter.svg";
//
//
//
//
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: theme.palette.common.VeryDarkBlue,
    padding: "2em",
    color: "white",
  },
  logo: {
    margin: "1em 2em",
  },
  pages: {
    margin: "1em 2em",
    color: "white",
    textDecoration: "none",
    fontWeight: 400,
    letterSpacing: 3,
    [theme.breakpoints.only("xs")]: {
      textAlign: "center",
    },
  },
  socialIcons: {
    width: 25,
    height: 25,
    margin: "1em 2em",
  },
  footerLogo: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));
//
//
//
//
function Footer() {
  //
  //
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  //
  //
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.mainContainer}
    >
      <Grid item container justify="center" xs={12} md={2}>
        <Button
          component={Link}
          to="/Bookmark-LandPage-React"
          disableRipple
          className={classes.footerLogo}
        >
          <img src={logo} alt="bookmark logo" className={classes.logo} />
        </Button>
      </Grid>
      <Grid item container justify="center" xs={12} md={2}>
        <Typography className={classes.pages} component={Link} to="/features">
          FEATURES
        </Typography>
      </Grid>
      <Grid item container justify="center" xs={12} md={2}>
        <Typography className={classes.pages} component={Link} to="/pricing">
          PRICING
        </Typography>
      </Grid>
      <Grid item container justify="center" xs={12} md={2}>
        <Typography className={classes.pages} component={Link} to="/contact">
          CONTACT
        </Typography>
      </Grid>
      <Grid item container justify={matchesSm ? "center" : null} xs={12} md={4}>
        <img
          src={facebookIcon}
          alt="facebook icon"
          className={classes.socialIcons}
        />
        <img
          src={twitterIcon}
          alt="twitter icon"
          className={classes.socialIcons}
        />
      </Grid>
    </Grid>
  );
}
//
//
export default Footer;
