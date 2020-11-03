import React from "react";
//
//
import { Link } from "react-router-dom";
//
//
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//
//
import mailIcon from "../../images/Contact-imgs/icon-email.svg";
import phoneIcon from "../../images/Contact-imgs/icon-phone.svg";
//
//
const useStyles = makeStyles((theme) => ({
  Pricingcontainer: {
    marginTop: "5em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2em",
    },
  },
  contactUsTitle: {
    marginBottom: "1em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.25rem",
    },
  },
  icons: {
    width: 30,
    padding: "1em 2em",
    [theme.breakpoints.down("sm")]: {
      width: 25,
    },
    [theme.breakpoints.only("xs")]: {
      padding: "1em 1em",
    },
  },
  contactWay: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
}));
//
//
function ContactPage() {
  //
  //
  const classes = useStyles();
  //
  //
  return (
    <Grid container direction="column" className={classes.Pricingcontainer}>
      <Grid item xs={12}>
        <Typography
          variant="h4"
          align="center"
          className={classes.contactUsTitle}
        >
          Contact us
        </Typography>
      </Grid>
      <Grid item xs={12} container justify="flex-start" alignItems="center">
        <img src={mailIcon} alt="email icon" className={classes.icons} />
        <Typography variant="h6" className={classes.contactWay}>
          Example@bookmark.com
        </Typography>
      </Grid>
      <Grid item xs={12} container justify="flex-start" alignItems="center">
        <img src={phoneIcon} alt="phone icon" className={classes.icons} />
        <Typography variant="h6" className={classes.contactWay}>
          +2012345678
        </Typography>
      </Grid>
    </Grid>
  );
}
//
//
export default ContactPage;
