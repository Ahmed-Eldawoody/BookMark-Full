import React from "react";
//
//
import { Link } from "react-router-dom";
//
//
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
//
//
import featuresIllustration1 from "../../images/Features-imgs/illustration-1.svg";
import featuresIllustration2 from "../../images/Features-imgs/illustration-2.svg";
import accessAnyWhere from "../../images/Features-imgs/icon-access-anywhere.svg";
import anyFile from "../../images/Features-imgs/icon-any-file.svg";
import collaboration from "../../images/Features-imgs/icon-collaboration.svg";
import security from "../../images/Features-imgs/icon-security.svg";
//
//
//
//
const useStyles = makeStyles((theme) => ({
  featuresContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2em",
    },
  },
  featuresIllustration_1: {
    width: "100%",
    marginBottom: "2em",
  },
  featuresTitle: {
    marginBottom: "2em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.25rem",
    },
  },
  featureColumn: {
    margin: "2em",
    [theme.breakpoints.down("sm")]: {
      margin: "1em",
    },
  },
}));
//
//
function FeaturesPage() {
  //
  //
  const classes = useStyles();
  //
  //
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  //
  //
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.featuresContainer}
    >
      {/* ---first illustration--- */}
      <Grid item xs={9} sm={6}>
        <img
          src={featuresIllustration1}
          alt="features Illustration 1"
          className={classes.featuresIllustration_1}
        />
      </Grid>
      {/* ---first illustration text--- */}
      <Grid item xs={10} sm={7}>
        <Typography
          variant="h4"
          align="center"
          className={classes.featuresTitle}
        >
          All your bookmarks in one secure location, accessible anywhere.
        </Typography>
      </Grid>
      {/* ---features--- */}
      <Grid item>
        <Grid
          container
          direction={matches ? "column" : "row"}
          justify="center"
          alignItems="center"
        >
          {/* --- access anywhere--- */}
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={10}
            md={4}
            className={classes.featureColumn}
          >
            <Grid item>
              <img src={accessAnyWhere} alt="" />
            </Grid>
            <Grid item>
              <Typography variant="h6" align="center" paragraph>
                Access your bookmarks, anywhere
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" align="center">
                The ability to use a smartphone, tablet, or computer to access
                your account means your bookmarks follow you everywhere.
              </Typography>
            </Grid>
          </Grid>
          {/* ---security--- */}
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={10}
            md={4}
            className={classes.featureColumn}
          >
            <Grid item>
              <img src={security} alt="" />
            </Grid>
            <Grid item>
              <Typography variant="h6" align="center" paragraph>
                Security you can trust
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" align="center">
                2-factor authentication and user-controlled encryption are just
                a couple of the security features we allow to help secure your
                bookmarks.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* --- features seconed row --- */}
      <Grid item>
        <Grid
          container
          direction={matches ? "column" : "row"}
          justify="center"
          alignItems="center"
        >
          {/* --- collaboration--- */}
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
            xs={10}
            md={4}
            className={classes.featureColumn}
          >
            <Grid item>
              <img src={collaboration} alt="" />
            </Grid>
            <Grid item>
              <Typography variant="h6" align="center" paragraph>
                Real-time collaboration
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" align="center">
                Securely share bookmarks and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* ---second illustration--- */}
      <Grid item xs={9} sm={6}>
        <img
          src={featuresIllustration2}
          alt="features Illustration 2"
          className={classes.featuresIllustration_1}
        />
      </Grid>
    </Grid>
  );
}
//
//
export default FeaturesPage;
