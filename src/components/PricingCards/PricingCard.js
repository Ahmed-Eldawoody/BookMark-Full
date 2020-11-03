import React from "react";
//
//
import {
  Grid,
  Card,
  List,
  ListItem,
  Typography,
  Button,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
//
//
//
//
const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: "3em",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0em",
    },
  },
  card: {
    padding: "1em",
    borderRadius: 0,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
      borderRadius: 5,
      width: 300,
    },
    [theme.breakpoints.down("xs")]: {
      width: 250,
    },
  },
  cardTitle: {
    width: "100%",
    fontSize: "1.2rem",
    opacity: 0.9,
  },
  cardPrice: {
    width: "100%",
    fontSize: "2.5rem",
    opacity: 0.8,
    "& span": {
      fontSize: "3.5rem",
    },
  },
  cardInfo: {
    width: "100%",
    padding: ".5em",
    opacity: 0.8,
  },
  cardButton: {
    textTransform: "none",
    marginTop: "1em",
    backgroundColor: theme.palette.common.SoftBlue,
    color: "white",
    "&:hover": {
      backgroundColor: "white",
      borderColor: theme.palette.common.SoftBlue,
      color: theme.palette.common.SoftBlue,
    },
  },
  middelCardButton: {
    textTransform: "none",
    marginTop: "1em",
    backgroundColor: "white",
    color: theme.palette.common.SoftBlue,
    "&:hover": {
      backgroundColor: "transparent",
      borderColor: "white",
      color: "white",
    },
  },
  middelCard: {
    padding: "2em",
    backgroundColor: theme.palette.primary.light,
    color: "white",
    [theme.breakpoints.down("sm")]: {
      padding: "1em",
      margin: "0em 0em 2em 0em",
      width: 300,
    },
    [theme.breakpoints.down("xs")]: {
      width: 250,
    },
  },
}));
//
//
function PricingCard({ switchOpened }) {
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
      direction={matches ? "column" : "row"}
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      {/* ---card 1--- */}
      <Grid item md={3}>
        <Card className={classes.card}>
          <List>
            {/* ---Card Title--- */}
            <ListItem>
              <Typography align="center" className={classes.cardTitle}>
                Basic
              </Typography>
            </ListItem>
            {/* ---Card Price--- */}
            <ListItem divider>
              <Typography
                align="center"
                paragraph
                className={classes.cardPrice}
              >
                $<span>{switchOpened ? 19.99 : 199.99}</span>
              </Typography>
            </ListItem>
            {/* ---Card info--- */}
            <ListItem divider>
              <Typography align="center" className={classes.cardInfo}>
                500 GB Storage
              </Typography>
            </ListItem>
            <ListItem divider>
              <Typography align="center" className={classes.cardInfo}>
                2 Users Allowed
              </Typography>
            </ListItem>
            <ListItem divider>
              <Typography align="center" className={classes.cardInfo}>
                Send up to 3 GB
              </Typography>
            </ListItem>
            <ListItem>
              <Button
                color="primary"
                size="large"
                fullWidth
                variant="outlined"
                className={classes.cardButton}
              >
                Learn More
              </Button>
            </ListItem>
          </List>
        </Card>
      </Grid>
      {/* ---card 2--- */}
      <Grid item md={4}>
        <Card className={classes.middelCard}>
          <List>
            {/* ---Card Title--- */}
            <ListItem>
              <Typography align="center" className={classes.cardTitle}>
                Professional
              </Typography>
            </ListItem>
            {/* ---Card Price--- */}
            <ListItem divider>
              <Typography
                align="center"
                paragraph
                className={classes.cardPrice}
              >
                $<span>{switchOpened ? 24.99 : 249.99}</span>
              </Typography>
            </ListItem>
            {/* ---Card info--- */}
            <ListItem divider>
              <Typography align="center" className={classes.cardInfo}>
                1 TB Storage
              </Typography>
            </ListItem>
            <ListItem divider>
              <Typography align="center" className={classes.cardInfo}>
                5 Users Allowed
              </Typography>
            </ListItem>
            <ListItem divider>
              <Typography align="center" className={classes.cardInfo}>
                Send up to 10 GB
              </Typography>
            </ListItem>
            <ListItem>
              <Button
                color="primary"
                size="large"
                fullWidth
                variant="outlined"
                className={classes.middelCardButton}
              >
                Learn More
              </Button>
            </ListItem>
          </List>
        </Card>
      </Grid>
      {/* ---card 3--- */}
      <Grid item md={3}>
        <Card className={classes.card}>
          <List>
            {/* ---Card Title--- */}
            <ListItem>
              <Typography align="center" className={classes.cardTitle}>
                Master
              </Typography>
            </ListItem>
            {/* ---Card Price--- */}
            <ListItem divider>
              <Typography
                align="center"
                paragraph
                className={classes.cardPrice}
              >
                $<span>{switchOpened ? 39.99 : 399.99}</span>
              </Typography>
            </ListItem>
            {/* ---Card info--- */}
            <ListItem divider>
              <Typography align="center" className={classes.cardInfo}>
                2 TB Storage
              </Typography>
            </ListItem>
            <ListItem divider>
              <Typography align="center" className={classes.cardInfo}>
                10 Users Allowed
              </Typography>
            </ListItem>
            <ListItem divider>
              <Typography align="center" className={classes.cardInfo}>
                Send up to 20 GB
              </Typography>
            </ListItem>
            <ListItem>
              <Button
                color="primary"
                size="large"
                fullWidth
                variant="outlined"
                className={classes.cardButton}
              >
                Learn More
              </Button>
            </ListItem>
          </List>
        </Card>
      </Grid>
    </Grid>
  );
}
//
//
export default PricingCard;
