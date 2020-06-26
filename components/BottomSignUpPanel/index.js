import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { SignUpButton } from "../ui/Buttons";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      backgroundColor: theme.palette.secondary.main,
      width: "100%",
    },
    container: {
      width: "50%",
      flexDirection: "row",
      margin: "0 auto",
      padding: "20px 0",
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        flexDirection: "column",
      },
    },
    textContainer: {
      display: "flex",
      flexDirection: "column",
      margin: "0 40px",
    },
  };
});

export default function BottomSignUpPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.textContainer}>
          <Typography>Join the conversation!</Typography>
          <Typography>
            Sign in to talk to real people, whom have been there and can help.
          </Typography>
        </div>
        <SignUpButton />
      </div>
    </div>
  );
}
