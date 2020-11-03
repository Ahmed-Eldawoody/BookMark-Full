import React from "react";
//
//
import { Grid, Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//
//
import { useFormik } from "formik";
//
//
//
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "2em",
    color: "white",
    backgroundColor: theme.palette.common.SoftBlue,
    padding: "3em",
    [theme.breakpoints.down("xs")]: {
      marginTop: "4em",
    },
  },
  stayUp: {
    color: "white",
    padding: "1em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.25rem",
    },
  },
  joinedNumber: {
    fontSize: ".8rem",
    letterSpacing: 5,
    textAlign: "center",
    padding: "1em",
  },
  contactUsButton: {
    textTransform: "none",
    height: 48,
    backgroundColor: theme.palette.common.SoftRed,
    color: "white",
    "&:hover": {
      backgroundColor: "white",
      borderColor: theme.palette.common.SoftRed,
      color: theme.palette.common.SoftRed,
    },
  },
  emailInput: {
    "& .MuiFilledInput-input": {
      backgroundColor: "white",
    },
    "& .MuiFormHelperText-root.Mui-error": {
      fontSize: 16,
      fontWeight: 600,
    },
  },
}));
//
//
//
const validate = (values) => {
  const errors = {};

  if (!values.email) {
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};
//
//
//
function EmailForm() {
  //
  //
  const classes = useStyles();
  //
  //
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  //
  //
  //
  // JSX
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item xs={12}>
        <Typography className={classes.joinedNumber}>
          35,000+ already joined
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" className={classes.stayUp}>
          Stay up-to-date with what <br /> we’re doing
        </Typography>
      </Grid>
      <Grid item>
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12} sm={8} md={6}>
              <TextField
                id="email"
                name="email"
                label="Enter your email address"
                variant="filled"
                fullWidth
                classes={{ root: classes.emailInput }}
                size="small"
                // color="primary"
                {...formik.getFieldProps("email")}
                error={formik.errors.email && formik.touched.email}
                helperText={
                  formik.errors.email && formik.touched.email
                    ? formik.errors.email
                    : null
                }
              />
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
              <Button
                variant="outlined"
                size="large"
                className={classes.contactUsButton}
                fullWidth
                type="submit"
              >
                Contact Us
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
//
//
export default EmailForm;
