import React, { useState } from "react";
//
//
import PropTypes from "prop-types";
//
//
import {
  Grid,
  Box,
  Typography,
  AppBar,
  Tabs,
  Tab,
  useMediaQuery,
  Button,
  Fade,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
//
//
import illustrationTab1 from "../../images/illustration-features-tab-1.svg";
import illustrationTab2 from "../../images/illustration-features-tab-2.svg";
import illustrationTab3 from "../../images/illustration-features-tab-3.svg";
//
//
//
//
const useStyles = makeStyles((theme) => ({
  appBar: {
    padding: 10,
    boxShadow: "none",
  },
  tabsItems: {
    margin: "0 auto",
  },
  tabsItem: {
    textTransform: "none",
    fontSize: ".92rem",
    [theme.breakpoints.up("sm")]: {
      width: 180,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ".8rem",
    },
    "&:hover": {
      color: theme.palette.common.SoftRed,
    },
  },
  indicator: {
    backgroundColor: theme.palette.common.SoftRed,
    [theme.breakpoints.only("xs")]: {
      backgroundColor: "transparent",
    },
  },
  illustrationFeaturesTab: {
    maxWidth: "80%",
    zIndex: 1,
    maxHeight: "20em",
    margin: "0 auto",
    paddingTop: "3em",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "2em",
    },
  },
  illustrationFeaturesTabBackDiv: {
    width: "70%",
    height: "50%",
    backgroundColor: theme.palette.common.SoftBlue,
    position: "relative",
    top: "-30%",
    borderBottomRightRadius: 200,
    zIndex: -1,
    [theme.breakpoints.down("md")]: {
      top: "-15%",
      height: "40%",
    },
    [theme.breakpoints.down("sm")]: {
      top: "-25%",
      height: "40%",
    },
    [theme.breakpoints.down("xs")]: {
      top: "-25%",
      height: "50%",
    },
  },
  featuresTabText: {
    [theme.breakpoints.down("xs")]: {
      padding: "2em 3em",
    },
  },
  featuresTabTitile: {
    marginTop: "2em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.25rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "4em",
    },
  },
  featuresTabSubtitile: {
    maxWidth: "70%",
    [theme.breakpoints.down("sm")]: {
      fontSize: ".75rem",
      maxWidth: "80%",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0 auto",
    },
  },
  featuresTabButton: {
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
// nessary attributes for tab
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
//
// Tabs component
function Tabz() {
  //
  //
  const classes = useStyles();
  //
  //
  // choosin tab initial state
  const [value, setValue] = useState(0);
  // handle tab change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //
  //
  // access screen size
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesXs = useMediaQuery(theme.breakpoints.only("xs"));
  //
  //
  //
  //
  // JSX
  return (
    <div>
      <AppBar position="static" color="transparent" className={classes.appBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          className={classes.tabsItems}
          classes={{ indicator: classes.indicator }}
          variant="fullWidth"
          orientation={matchesSm ? "horizontal" : "vertical"}
        >
          <Tab
            label="Simple Bookmarking"
            {...a11yProps(0)}
            className={classes.tabsItem}
            style={{
              borderBottom:
                value === 0 && matchesXs
                  ? `2px solid ${theme.palette.common.SoftRed}`
                  : `2px solid ${theme.palette.common.GrayishBlue}`,
            }}
          />
          <Tab
            label="Speedy Searching"
            {...a11yProps(1)}
            className={classes.tabsItem}
            style={{
              borderBottom:
                value === 1 && matchesXs
                  ? `2px solid ${theme.palette.common.SoftRed}`
                  : `2px solid ${theme.palette.common.GrayishBlue}`,
            }}
          />
          <Tab
            label="Easy Sharing"
            {...a11yProps(2)}
            className={classes.tabsItem}
            style={{
              borderBottom:
                value === 2 && matchesXs
                  ? `2px solid ${theme.palette.common.SoftRed}`
                  : `2px solid ${theme.palette.common.GrayishBlue}`,
            }}
          />
        </Tabs>
      </AppBar>
      {/* ---tab 1 --- */}
      <Fade in={value === 0} timeout={500}>
        <TabPanel value={value} index={0}>
          <Grid container>
            {/* ---image--- */}
            <Grid item container alignItems="flex-start" xs={12} sm={6}>
              <img
                src={illustrationTab1}
                alt="illustration Tab1"
                className={classes.illustrationFeaturesTab}
              />
              <div className={classes.illustrationFeaturesTabBackDiv}></div>
            </Grid>
            {/* ---Features text--- */}
            <Grid item xs={12} sm={6} className={classes.featuresTabText}>
              <Grid
                item
                container
                direction="column"
                style={{ padding: 0, margin: 0 }}
              >
                <Grid item>
                  <Typography
                    variant="h4"
                    paragraph
                    align={matchesXs ? "center" : "left"}
                    className={classes.featuresTabTitile}
                  >
                    Bookmark in one click
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    paragraph
                    align={matchesXs ? "center" : "left"}
                    className={classes.featuresTabSubtitile}
                  >
                    Organize your bookmarks however you like. Our simple
                    drag-and-drop interface gives you complete control over how
                    you manage your favourite sites.
                  </Typography>
                </Grid>
                {matchesXs ? null : (
                  <Grid item sm={7}>
                    <Button
                      variant="outlined"
                      color="primary"
                      className={classes.featuresTabButton}
                      size="medium"
                    >
                      More Info
                    </Button>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
      </Fade>
      {/* ---tab 2 --- */}
      <Fade in={value === 1} timeout={500}>
        <TabPanel value={value} index={1}>
          <Grid container>
            {/* ---image--- */}
            <Grid item container alignItems="flex-start" xs={12} sm={6}>
              <img
                src={illustrationTab2}
                alt="illustration Tab2"
                className={classes.illustrationFeaturesTab}
              />
              <div className={classes.illustrationFeaturesTabBackDiv}></div>
            </Grid>
            {/* ---Features text--- */}
            <Grid item xs={12} sm={6} className={classes.featuresTabText}>
              <Grid item container direction="column">
                <Grid item>
                  <Typography
                    variant="h4"
                    paragraph
                    align={matchesXs ? "center" : "left"}
                    className={classes.featuresTabTitile}
                  >
                    Intelligent search
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    paragraph
                    align={matchesXs ? "center" : "left"}
                    className={classes.featuresTabSubtitile}
                  >
                    Our powerful search feature will help you find saved sites
                    in no time at all. No need to trawl through all of your
                    bookmarks.
                  </Typography>
                </Grid>
                {matchesXs ? null : (
                  <Grid item sm={7}>
                    <Button
                      variant="outlined"
                      color="primary"
                      className={classes.featuresTabButton}
                      size="medium"
                    >
                      More Info
                    </Button>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
      </Fade>
      {/* ---tab 3 --- */}
      <Fade in={value === 2} timeout={500}>
        <TabPanel value={value} index={2}>
          <Grid container>
            {/* ---image--- */}
            <Grid item container alignItems="flex-start" xs={12} sm={6}>
              <img
                src={illustrationTab3}
                alt="illustration Tab3"
                className={classes.illustrationFeaturesTab}
              />
              <div className={classes.illustrationFeaturesTabBackDiv}></div>
            </Grid>
            {/* ---Features text--- */}
            <Grid item xs={12} sm={6} className={classes.featuresTabText}>
              <Grid item container direction="column">
                <Grid item>
                  <Typography
                    variant="h4"
                    paragraph
                    align={matchesXs ? "center" : "left"}
                    className={classes.featuresTabTitile}
                  >
                    Share your bookmarks
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    paragraph
                    align={matchesXs ? "center" : "left"}
                    className={classes.featuresTabSubtitile}
                  >
                    Easily share your bookmarks and collections with others.
                    Create a shareable link that you can send at the click of a
                    button.
                  </Typography>
                </Grid>
                {matchesXs ? null : (
                  <Grid item sm={7}>
                    <Button
                      variant="outlined"
                      color="primary"
                      className={classes.featuresTabButton}
                      size="medium"
                    >
                      More Info
                    </Button>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
      </Fade>
    </div>
  );
}
//
//
export default Tabz;
//
//
//
// Tabpanel (Whats render for each tab)
function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}
//
//
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
