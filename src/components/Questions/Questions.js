import React, { useState } from "react";
//
//
import {
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
//
//
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//
//
//
//
const useStyles = makeStyles((theme) => ({
  questionsTitile: {
    marginTop: "2em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.25rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "5em",
    },
  },
  questionsSubtitle: {
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
  accordionQuestion: {
    "&:hover": {
      color: theme.palette.common.SoftRed,
    },
  },
  downloadButton: {
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
// Features component
function Questions() {
  //
  //
  const classes = useStyles();
  //
  //
  const [expand1, setExpand1] = useState(false);
  const handelExpantion1 = (event) => {
    setExpand1(!expand1);
  };
  const [expand2, setExpand2] = useState(false);
  const handelExpantion2 = (event) => {
    setExpand2(!expand2);
  };
  const [expand3, setExpand3] = useState(false);
  const handelExpantion3 = (event) => {
    setExpand3(!expand3);
  };
  const [expand4, setExpand4] = useState(false);
  const handelExpantion4 = (event) => {
    setExpand4(!expand4);
  };
  //
  //
  const theme = useTheme();
  //
  // JSX
  return (
    <Grid container direction="column">
      {/* ---Questions Header & subtitle--- */}
      <Grid item>
        <Typography
          variant="h4"
          align="center"
          paragraph
          className={classes.questionsTitile}
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          paragraph
          className={classes.questionsSubtitle}
        >
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </Typography>
      </Grid>
      {/* ---Expantion panel 1---- */}
      <Grid item xs={11} sm={6} style={{ margin: "1em auto" }}>
        <Accordion onChange={(event) => handelExpantion1()}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                style={{
                  color: expand1
                    ? theme.palette.common.SoftRed
                    : theme.palette.common.SoftBlue,
                }}
                fontSize="large"
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.accordionQuestion}
          >
            <Typography>What is Bookmark?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
              quis quam ornare mattis.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
      {/* ---Expantion panel 2---- */}
      <Grid item xs={11} sm={6} style={{ margin: "1em auto" }}>
        <Accordion onChange={(event) => handelExpantion2()}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                style={{
                  color: expand2
                    ? theme.palette.common.SoftRed
                    : theme.palette.common.SoftBlue,
                }}
                fontSize="large"
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.accordionQuestion}
          >
            <Typography>How can I request a new browser?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Vivamus luctus eros aliquet convallis ultricies. Mauris augue
              massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus
              eros aliquet convallis ultricies. Mauris augue massa, ultricies
              non ligula. Suspendisse imperdie tVivamus luctus eros aliquet
              convallis ultricies. Mauris augue massa, ultricies non ligula.
              Suspendisse imperdiet.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
      {/* ---Expantion panel 3---- */}
      <Grid item xs={11} sm={6} style={{ margin: "1em auto" }}>
        <Accordion onChange={(event) => handelExpantion3()}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                style={{
                  color: expand3
                    ? theme.palette.common.SoftRed
                    : theme.palette.common.SoftBlue,
                }}
                fontSize="large"
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.accordionQuestion}
          >
            <Typography>Is there a mobile app?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Sed consectetur quam id neque fermentum accumsan. Praesent luctus
              vestibulum dolor, ut condimentum urna vulputate eget. Cras in
              ligula quis est pharetra mattis sit amet pharetra purus. Sed
              sollicitudin ex et ultricies bibendum.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
      {/* ---Expantion panel 4 ---- */}
      <Grid item xs={11} sm={6} style={{ margin: "1em auto" }}>
        <Accordion onChange={(event) => handelExpantion4()}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                style={{
                  color: expand4
                    ? theme.palette.common.SoftRed
                    : theme.palette.common.SoftBlue,
                }}
                fontSize="large"
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.accordionQuestion}
          >
            <Typography>What about other Chromium browsers?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Integer condimentum ipsum id imperdiet finibus. Vivamus in
              placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida
              pellentesque non ut velit.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
      {/* ---More Info Button--- */}
      <Grid item style={{ margin: "1em auto" }}>
        <Button
          variant="outlined"
          color="primary"
          size="medium"
          className={classes.downloadButton}
        >
          More Info
        </Button>
      </Grid>
    </Grid>
  );
}
//
//
export default Questions;
