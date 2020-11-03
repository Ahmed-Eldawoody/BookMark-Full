import React, { useState } from "react";
//
//
import { Link } from "react-router-dom";
//
//
import {
  AppBar,
  Toolbar,
  Button,
  Hidden,
  Drawer,
  Grid,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//
//
import { motion } from "framer-motion";
//
//
import BookMarkLogo from "../../images/logo-bookmark.svg";
import BookMarkLogoDrawer from "../../images/logo-bookmark-drawer.svg";
import hamburgerIcon from "../../images/icon-hamburger.svg";
import closeIcon from "../../images/icon-close.svg";
import facebookIcon from "../../images/icon-facebook.svg";
import twitterIcon from "../../images/icon-twitter.svg";
//
//
//
// Styles
const useStyles = makeStyles((theme) => ({
  toolbar: {
    zIndex: theme.zIndex.modal + 1,
  },
  logoContainer: {
    marginRight: "auto",
    "&:hover": { backgroundColor: "transparent" },
  },
  navigationButton: {
    marginRight: 20,
    "&:hover": {
      color: theme.palette.common.SoftRed,
    },
  },
  loginButton: {
    marginRight: 50,
    color: "white",
    backgroundColor: theme.palette.common.SoftRed,
    "&:hover": {
      color: theme.palette.common.SoftRed,
      borderColor: theme.palette.common.SoftRed,
    },
  },
  hamburgerIcon: {
    width: 20,
    [theme.breakpoints.down("xs")]: {
      width: 15,
    },
  },
  drawer: {
    width: "100%",
    color: "white",
    background: "rgba(37,43, 70, 0.9)",
  },
  drawerList: {
    width: "60%",
    marginTop: 128,
    margin: "0 auto",
  },
  drawerListItem: {
    width: "100%",
    textAlign: "center",
    textTransform: "uppercase",
    padding: ".5em 0",
    fontSize: "1.25rem",
  },
  drawerLoginButton: {
    color: "white",
    borderColor: "white",
    fontSize: "1.5rem",
    letterSpacing: 5,
    padding: ".5em 0",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.35rem",
    },
  },
}));
//
//
//
// Appbar component
function Appbar() {
  //
  //
  // States
  //   Drawer inial state
  const [openDrawer, setOpenDrawer] = useState(false);
  //   open&close drawer
  function handelOpenDrawer() {
    setOpenDrawer(!openDrawer);
  }
  //
  //
  // Access styles
  const classes = useStyles();
  //
  //
  const AppbarButtons = [
    { name: "features", to: "/features" },
    { name: "pricing", to: "/pricing" },
    { name: "contact", to: "/contact" },
  ];
  //
  //
  // JSX
  return (
    <div>
      {/* ---AppBar--- */}
      <AppBar
        position="static"
        color="transparent"
        style={{ boxShadow: openDrawer ? "none" : "" }}
      >
        <Toolbar className={classes.toolbar}>
          {/* ---Logo--- */}
          <Button
            component={Link}
            disableRipple
            to="/Bookmark-LandPage-React"
            onClick={() => setOpenDrawer(false)}
            className={classes.logoContainer}
          >
            <img
              src={openDrawer ? BookMarkLogoDrawer : BookMarkLogo}
              alt="BookMark-Logo"
              component={Link}
              to="/"
            />
          </Button>
          {/* ---navigation button (md screens and up)--- */}
          <Hidden smDown>
            {AppbarButtons.map((button, index) => {
              return (
                <Button
                  key={index}
                  disableRipple
                  component={Link}
                  to={button.to}
                  className={classes.navigationButton}
                >
                  {button.name}
                </Button>
              );
            })}
            {/* ---Login button--- */}
            <Button
              variant="outlined"
              size="large"
              className={classes.loginButton}
              component={Link}
              to="/login"
            >
              login
            </Button>
          </Hidden>
          {/* ---drawer icon--- */}
          <Hidden mdUp>
            <motion.img
              src={openDrawer ? closeIcon : hamburgerIcon}
              alt="drawer icon"
              className={classes.hamburgerIcon}
              onClick={handelOpenDrawer}
              whileTap={{ rotate: 180 }}
            />
          </Hidden>
        </Toolbar>
      </AppBar>
      {/* ---Drawer--- */}
      <Drawer
        anchor="right"
        open={openDrawer}
        classes={{ paper: classes.drawer }}
      >
        <List className={classes.drawerList}>
          {AppbarButtons.map((button, index) => {
            return (
              <ListItem
                button
                divider
                key={index}
                component={Link}
                to={button.to}
                onClick={() => setOpenDrawer(false)}
              >
                <Typography variant="h5" className={classes.drawerListItem}>
                  {button.name}
                </Typography>
              </ListItem>
            );
          })}

          <ListItem>
            <Button
              fullWidth
              variant="outlined"
              size="large"
              className={classes.drawerLoginButton}
              component={Link}
              onClick={() => setOpenDrawer(false)}
              to="/login"
            >
              LOGIN
            </Button>
          </ListItem>
        </List>
        <Grid
          container
          direction="row"
          style={{ height: "20%" }}
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <img
              src={facebookIcon}
              alt="facebook-Icon"
              style={{ marginRight: "3em" }}
            />
          </Grid>
          <Grid item>
            <img
              src={twitterIcon}
              alt="twitter-Icon"
              style={{ marginLeft: "3em" }}
            />
          </Grid>
        </Grid>
      </Drawer>
    </div>
  );
}
//
//
export default Appbar;
