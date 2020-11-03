import React from "react";
//
//
import { Grid } from "@material-ui/core";
//
//
//
import HeroBlock from "../../components/HeroBlock/HeroBlock";
import Features from "../../components/Features/Features";
import Download from "../../components/Download/Download";
import Questions from "../../components/Questions/Questions";
//
//
//
//
//
//
//
//
// LandingPage commponent
function LandingPage() {
  //
  //
  // JSX
  return (
    <Grid container direction="column">
      <Grid item>
        <HeroBlock />
      </Grid>
      <Grid item>
        <Features />
      </Grid>
      <Grid item>
        <Download />
      </Grid>
      <Grid item>
        <Questions />
      </Grid>
    </Grid>
  );
}
//
//
export default LandingPage;
