import React from "react";
//
//
import { Grid, Typography, Card, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//
//
import chromeIcon from "../../images/logo-chrome.svg";
import firefoxIcon from "../../images/logo-firefox.svg";
import operaIcon from "../../images/logo-opera.svg";
import dots from "../../images/bg-dots.svg";
//
//
//
const useStyles = makeStyles((theme) => ({
  downloadTitile: {
    marginTop: "4em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.25rem",
    },
  },
  downloadSubtitle: {
    maxWidth: "50%",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      maxWidth: "80%",
      margin: "1em auto",
      fontSize: ".75rem",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "90%",
    },
  },
  card: {
    paddingTop: "1em",
    maxWidth: 275,
    [theme.breakpoints.down("sm")]: {
      marginTop: "2em",
    },
  },
  cardTitle: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.15rem",
      textAlign: "center",
    },
  },
  cardButtonGrid: {
    marginBottom: "1em",
  },
  cardButton: {
    textTransform: "none",
    backgroundColor: theme.palette.common.SoftBlue,
    color: "white",
    "&:hover": {
      backgroundColor: "white",
      borderColor: theme.palette.common.SoftBlue,
      color: theme.palette.common.SoftBlue,
    },
  },
}));
//
//
//
//
//
function Download() {
  //
  //
  const classes = useStyles();
  //
  //
  // JSX
  return (
    <div>
      <Grid container direction="column">
        {/* ---Download Header & subtitle--- */}
        <Grid item>
          <Typography
            variant="h4"
            align="center"
            paragraph
            className={classes.downloadTitile}
          >
            Download the extension
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            paragraph
            className={classes.downloadSubtitle}
          >
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </Typography>
        </Grid>
        {/* ---Cards--- */}
        <Grid
          item
          container
          direction="row"
          justify="space-evenly"
          wrape="wrape"
          style={{ minHeight: "25em", maxHeight: 990 }}
        >
          {/* ---chrome card---- */}
          <Grid item container direction="column" style={{ maxWidth: 275 }}>
            <Card className={classes.card}>
              <Grid
                container
                direction="column"
                alignItems="center"
                spacing={3}
              >
                {/* --Card icon--- */}
                <Grid item>
                  <img src={chromeIcon} alt="chromeIcon" />
                </Grid>
                {/* --Card text-- */}
                <Grid item>
                  <Typography variant="h6" className={classes.cardTitle}>
                    Add to Chrome
                  </Typography>
                  <Typography variant="body2">Minimum version 62</Typography>
                </Grid>
                {/* --Card dots-- */}
                <Grid item>
                  <img src={dots} alt="dots" />
                </Grid>
                {/* --Card Button-- */}
                <Grid item className={classes.cardButtonGrid}>
                  <Button
                    variant="outlined"
                    size="large"
                    fullWidth
                    className={classes.cardButton}
                  >
                    Add & Install Extension
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          {/* ---firefox card---- */}
          <Grid
            item
            container
            direction="column"
            justify="center"
            style={{ maxWidth: 275 }}
          >
            <Card className={classes.card}>
              <Grid
                container
                direction="column"
                alignItems="center"
                spacing={3}
              >
                {/* --Card icon--- */}
                <Grid item>
                  <img src={firefoxIcon} alt="firefoxIcon" />
                </Grid>
                {/* --Card text-- */}
                <Grid item>
                  <Typography variant="h6" className={classes.cardTitle}>
                    Add to Firefox
                  </Typography>
                  <Typography variant="body2">Minimum version 55</Typography>
                </Grid>
                {/* --Card dots-- */}
                <Grid item>
                  <img src={dots} alt="dots" />
                </Grid>
                {/* --Card Button-- */}
                <Grid item className={classes.cardButtonGrid}>
                  <Button
                    variant="outlined"
                    size="large"
                    fullWidth
                    className={classes.cardButton}
                  >
                    Add & Install Extension
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          {/* ---opera card---- */}
          <Grid
            item
            container
            direction="column"
            justify="flex-end"
            style={{ maxWidth: 275 }}
          >
            <Card className={classes.card}>
              <Grid
                container
                direction="column"
                alignItems="center"
                spacing={3}
              >
                {/* --Card icon--- */}
                <Grid item>
                  <img src={operaIcon} alt="operaIcon" />
                </Grid>
                {/* --Card text-- */}
                <Grid item>
                  <Typography variant="h6" className={classes.cardTitle}>
                    Add to Opera
                  </Typography>
                  <Typography variant="body2">Minimum version 46</Typography>
                </Grid>
                {/* --Card dots-- */}
                <Grid item>
                  <img src={dots} alt="dots" />
                </Grid>
                {/* --Card Button-- */}
                <Grid item className={classes.cardButtonGrid}>
                  <Button
                    variant="outlined"
                    size="large"
                    fullWidth
                    className={classes.cardButton}
                  >
                    Add & Install Extension
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Download;
