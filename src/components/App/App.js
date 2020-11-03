import React from "react";
//
//
import { Switch, Route, useLocation } from "react-router-dom";
//
//
import { Grid, Fab, useScrollTrigger, Zoom } from "@material-ui/core";
//
//
import { makeStyles } from "@material-ui/core/styles";
//
//
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
//
//
import Appbar from "../Appbar/Appbar";
import LandingPage from "../../Pages/LandingPage/LandingPage";
import FeaturesPage from "../../Pages/FeaturesPage/FeaturesPage";
import PricingPage from "../../Pages/PricingPage/PricingPage";
import ContactPage from "../../Pages/ContactPage/ContactPage";
import LoginPage from "../../Pages/LoginPage/LoginPage";
import Footer from "../Footer/Footer";
import EmailForm from "../EmailForm/EmailForm";

//
//
//
//
const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 3,
  },
}));
//
//
function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
  //
  //
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}
//
//
//
//
function App(props) {
  //
  //
  const location = useLocation();
  //
  //
  return (
    <React.Fragment>
      <div id="back-to-top-anchor">
        <Appbar />
      </div>
      <Switch>
        <Route exact path="/Bookmark-LandPage-React">
          <LandingPage />
        </Route>
        <Route exact path="/features">
          <FeaturesPage />
        </Route>
        <Route exact path="/pricing">
          <PricingPage />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
      </Switch>
      <EmailForm />
      <Footer />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
//
//
//
export default App;
