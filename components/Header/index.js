import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import WisdoLogo from "../../public/Wisdo_logo.png";
import Typography from "@material-ui/core/Typography";
import {
  ExploreCommunitiesButton,
  LogInButton,
  SignUpButton,
} from "../ui/Buttons";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 60,
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  logo: {
    background: "transparent",
    width: 100,
    margin: "0 30px",
  },
  appBar: {
    height: 60,
    backgroundColor: "white",
    borderBottom: "2px solid #dbdbdb",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      height: "auto",
    },
  },
  headingText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  logoContainer: {
    width: "25%",
  },
  headingAndButtonsContainer: {
    width: "75%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position={"static"} className={classes.appBar}>
        <div className={classes.logoContainer}>
          <img src={WisdoLogo} className={classes.logo} alt="Wisdo logo" />
        </div>
        <div className={classes.headingAndButtonsContainer}>
          <Typography className={classes.headingText}>Explore</Typography>
          <div className={classes.buttonsContainer}>
            <ExploreCommunitiesButton />
            <LogInButton />
            <SignUpButton />
          </div>
        </div>
      </AppBar>
    </div>
  );
}
