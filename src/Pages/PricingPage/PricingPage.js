import React, { useState } from "react";
//
//
//
import { motion } from "framer-motion";
//
//
import { Grid, Switch, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//
//
import PricingCards from "../../components/PricingCards/PricingCard";
//
//
//
//
const useStyles = makeStyles((theme) => ({
  pricingContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2em",
    },
  },
  pricingTitle: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.25rem",
    },
  },
  switchLabel: {
    color: theme.palette.primary.light,
    opacity: 0.8,
  },
  pricinSwitchContainer: {
    marginBottom: "2em",
  },
}));
//
//
const exitVar = {
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
//
//
function PricingPage() {
  //
  //
  const classes = useStyles();
  //
  //
  const [switchOpen, setSwitchOpen] = useState(true);
  function handleSwitchChange() {
    setSwitchOpen(!switchOpen);
  }
  //
  //
  //
  //
  console.log(switchOpen);
  //
  return (
    <Grid container direction="column" className={classes.pricingContainer}>
      {/* ---Pricing Title--- */}
      <Grid item xs={12}>
        <Typography
          variant="h4"
          align="center"
          paragraph
          className={classes.pricingTitle}
        >
          Our Pricing
        </Typography>
      </Grid>
      {/* ---Pricing Switch--- */}
      <Grid
        item
        container
        justify="center"
        alignItems="center"
        xs={12}
        className={classes.pricinSwitchContainer}
      >
        <Grid item>
          <Typography className={classes.switchLabel}>Annually</Typography>
        </Grid>
        <Grid item>
          <Switch
            color="primary"
            checked={switchOpen}
            onChange={handleSwitchChange}
          />
        </Grid>
        <Grid item>
          <Typography className={classes.switchLabel}>Monthly</Typography>
        </Grid>
      </Grid>
      {/* --- Pricing Card --- */}
      <Grid item>
        <PricingCards switchOpened={switchOpen} />
      </Grid>
    </Grid>
  );
}
//
//
export default PricingPage;
