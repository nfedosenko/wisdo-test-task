import React from "react";
import Header from "../../components/Header";
import BottomSignUpPanel from "../../components/BottomSignUpPanel";
import { makeStyles } from "@material-ui/core/styles";
import IconLink from "../../components/ui/IconLink";
import PublicIcon from "@material-ui/icons/Public";
import FilterHdrIcon from "@material-ui/icons/FilterHdr";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#f8f7f7",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  leftSection: {
    width: "25%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "3%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  mainContent: {
    width: "75%",
    padding: "30px 0",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  bottomPanel: {},
}));

export default function ({ children, title = "Widso Test Task" }) {
  const classes = useStyles();
  const router = useRouter();
  const { route } = router;

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.container}>
        <div className={classes.leftSection}>
          <IconLink
            text="Communities"
            to="/communities"
            isActive={route === "/communities"}
            icon={<PublicIcon fontSize={"small"} />}
          />
          <IconLink
            text="Mentors"
            to="/mentors"
            isActive={route === "/mentors"}
            icon={<FilterHdrIcon fontSize={"small"} />}
          />
        </div>
        <div className={classes.mainContent}>{children}</div>
      </div>
      <div className={classes.bottomPanel}>
        <BottomSignUpPanel />
      </div>
    </div>
  );
}
