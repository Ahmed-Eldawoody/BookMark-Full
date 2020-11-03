import React from "react";
//
//
import { Link } from "react-router-dom";
//
//
import { Grid, Card, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//
//
import * as Yup from "yup";
//
import { useFormik } from "formik";
//
//
//
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "5em",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2em",
    },
  },
  cardContainer: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.only("xs")]: {
      width: "90%",
    },
  },
  card1: {
    backgroundColor: theme.palette.primary.dark,
    padding: "1em",
    boxShadow: theme.shadows[12],
    marginBottom: "2em",
  },
  card1Title: {
    color: "white",
    wordSpacing: 3,
  },
  card2: {
    padding: "1em",
    boxShadow: theme.shadows[12],
  },
  button: {
    backgroundColor: theme.palette.common.SoftBlue,
    color: "white",
    marginBottom: ".5em",
    "&:hover": {
      backgroundColor: "white",
      borderColor: theme.palette.common.SoftBlue,
      color: theme.palette.common.SoftBlue,
    },
  },
  spanBody: {
    color: theme.palette.common.SoftRed,
  },
}));
//
//
function LoginPage() {
  //
  //
  const classes = useStyles();
  //
  //
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.mixed().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  //
  //
  //
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.container}
    >
      {/* --- Card 1 --- */}
      <Grid item className={classes.cardContainer}>
        <Card className={classes.card1}>
          <Typography
            variant="h6"
            align="center"
            className={classes.card1Title}
          >
            Try it for free 7 days
          </Typography>
        </Card>
      </Grid>
      {/* --- Card --- */}
      <Grid item className={classes.cardContainer}>
        <Card className={classes.card2}>
          <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <Grid container direction="column" spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="First Name"
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                  error={formik.errors.firstName && formik.touched.firstName}
                  helperText={
                    formik.errors.firstName && formik.touched.firstName
                      ? formik.errors.firstName
                      : null
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Last Name"
                  id="lastName"
                  name="lastName"
                  type="text"
                  {...formik.getFieldProps("lastName")}
                  error={formik.errors.lastName && formik.touched.lastName}
                  helperText={
                    formik.errors.lastName && formik.touched.lastName
                      ? formik.errors.lastName
                      : null
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Email Address"
                  id="email"
                  name="email"
                  fullWidth
                  {...formik.getFieldProps("email")}
                  error={formik.errors.email && formik.touched.email}
                  helperText={
                    formik.errors.email && formik.touched.email
                      ? formik.errors.email
                      : null
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  name="password"
                  {...formik.getFieldProps("password")}
                  error={formik.errors.password && formik.touched.password}
                  helperText={
                    formik.errors.password && formik.touched.password
                      ? formik.errors.password
                      : null
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  type="submit"
                  fullWidth
                  className={classes.button}
                >
                  claim your ferr trail
                </Button>
                <Typography variant="body2">
                  By clicking the button, you are agreeing the{" "}
                  <span className={classes.spanBody}>Terms and Services</span>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Grid>
    </Grid>
  );
}
//
//
export default LoginPage;
