import React, { useEffect, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  getCategoryLifeChallenges,
  joinCommunity,
} from "../../services/ApiService";
import { RoundedButton } from "../ui/Buttons";
import SuccessImage from "../../public/success-image.png";
import aggregateCategoriesData from "../../utils/aggregateCategoriesData";

const StepValueType = {
  BeenThere: "been-there",
  ThereNow: "there-now",
};

const dialogStyles = makeStyles((theme) => ({
  paper: {
    overflow: "visible",
    [theme.breakpoints.down("sm")]: {
      maxHeight: "80%",
    },
    height: "80%",
  },
  root: {
    overflow: "visible",
  },
}));

const useStyles = makeStyles((theme) => ({
  titleRoot: {
    borderBottom: "2px solid #dbdbdb",
    display: "flex",
    padding: "5px 24px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
  },
  successTitleRoot: {
    borderBottom: "2px solid #8b5ffe",
    textAlign: "center",
  },
  contentRoot: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  contentSuccess: {
    justifyContent: "center"
  },
  helpTitle: {
    color: "#8b5ffe",
  },
  counter: {
    fontWeight: "bolder",
  },
  nextButton: {
    alignSelf: "flex-end",
  },
  coverImage: {
    width: 300,
    height: 150,
    borderRadius: 10,
    objectFit: "cover",
  },
  title: {
    fontWeight: "bolder",
    textAlign: "center",
    fontSize: 20,
    padding: "20px 0",
  },
  closeButton: {
    position: "absolute",
    right: -60,
    top: 0,
    background: "white",
    borderRadius: "30px",
    "&:hover": {
      background: "white",
    },
    [theme.breakpoints.down("sm")]: {
      right: 0,
      top: -60,
    },
  },
  backButton: {
    position: "absolute",
    left: -60,
    top: 0,
    background: "white",
    borderRadius: "30px",
    "&:hover": {
      background: "white",
    },
    [theme.breakpoints.down("sm")]: {
      left: 0,
      top: -60,
    },
  },
  stepRoot: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "80%",
    marginBottom: 10,
  },
  stepTitle: {
    fontWeight: "bolder",
    padding: "10px 0",
  },
  stepButtonsContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  stepOptionButton: {
    width: "50%",
    "&.active": {
      backgroundColor: "#8b5ffe",
      color: "white",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  successText: {
    marginBottom: 20,
  },
  successImage: {
    width: "100%",
  },
  stepsCounter: {
    fontWeight: "bolder",
  },
  welcomeText: {
    width: "100%",
  },
}));

export default function JoinCommunityModal({ modalData, onClose }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [totalHelp, setTotalHelp] = useState(0);
  const [data, setData] = useState({});
  const [challenges, setChallenges] = useState({ steps: [] });
  const classes = useStyles();
  const dialogClasses = dialogStyles();

  useEffect(() => {
    getCategoryLifeChallenges(modalData.lifeChallengeId).then((challenges) => {
      setChallenges(challenges[0]);
    });
  }, []);

  const updateData = (step, value) => {
    const currentValue = data[step.id];
    let newTotalHelp = 0;

    if (currentValue) {
      if (currentValue.value === value) {
        setData({ ...data, [step.id]: null });

        if (value === StepValueType.BeenThere) {
          newTotalHelp = totalHelp - step.beenThereCount;
        } else if (value === StepValueType.ThereNow) {
          newTotalHelp = totalHelp - step.followingCount;
        }
      } else {
        setData({
          ...data,
          [step.id]: {
            value,
            beenThereCount: step.beenThereCount,
            followingCount: step.followingCount,
          },
        });

        if (value === StepValueType.BeenThere) {
          newTotalHelp =
            totalHelp + step.beenThereCount - currentValue.followingCount;
        } else if (value === StepValueType.ThereNow) {
          newTotalHelp =
            totalHelp + step.followingCount - currentValue.beenThereCount;
        }
      }
    } else {
      setData({
        ...data,
        [step.id]: {
          value,
          beenThereCount: step.beenThereCount,
          followingCount: step.followingCount,
        },
      });

      if (value === StepValueType.BeenThere) {
        newTotalHelp = totalHelp + step.beenThereCount;
      } else if (value === StepValueType.ThereNow) {
        newTotalHelp = totalHelp + step.followingCount;
      }
    }

    setTotalHelp(newTotalHelp);
  };

  const meetTheCommunity = () => {
    const aggregatedData = aggregateCategoriesData(data);
    joinCommunity(aggregatedData).then(() => {
      onClose();
    });
  };

  return (
    <Dialog
      open={true}
      onClose={onClose}
      classes={dialogClasses}
      scroll={"paper"}
      fullWidth={true}
      maxWidth={"sm"}
    >
      {isSuccess ? (
        <DialogTitle
          className={[classes.titleRoot, classes.successTitleRoot]}
          disableTypography
        >
          <Typography className={classes.welcomeText}>
            <span className={classes.stepsCounter}>Step 3/3</span> Welcome!
          </Typography>
        </DialogTitle>
      ) : (
        <DialogTitle className={classes.titleRoot} disableTypography>
          <Typography className={classes.helpTitle}>
            {totalHelp
              ? `${totalHelp} people you can help`
              : "You can help someone"}
          </Typography>
          <RoundedButton
            variant="contained"
            color="primary"
            className={classes.nextButton}
            onClick={() => setIsSuccess(true)}
          >
            Next
          </RoundedButton>
        </DialogTitle>
      )}

      {isSuccess ? (
        <DialogContent className={[classes.contentRoot, classes.contentSuccess]}>
          <Typography className={classes.title}>
            We are so glad you joined!
          </Typography>
          <Typography className={classes.successText}>
            Mentors, Helpers and people just like you are going to share their
            experience like you. Let's learn from each other and grow together.{" "}
          </Typography>
          <RoundedButton
            variant="contained"
            color="primary"
            onClick={meetTheCommunity}
          >
            Meet the community
          </RoundedButton>
          <img
            src={SuccessImage}
            alt="Success image"
            className={classes.successImage}
          />
        </DialogContent>
      ) : (
        <DialogContent className={classes.contentRoot}>
          <img
            src={challenges.coverImageUrl}
            alt={""}
            className={classes.coverImage}
          />
          <Typography className={classes.title}>{challenges.title}</Typography>
          {challenges.steps.map((step) => {
            return (
              <div className={classes.stepRoot} key={step.id}>
                <Typography className={classes.stepTitle}>
                  {step.title}
                </Typography>
                <div className={classes.stepButtonsContainer}>
                  <RoundedButton
                    variant="contained"
                    className={[
                      classes.stepOptionButton,
                      data[step.id] &&
                      data[step.id].value === StepValueType.BeenThere
                        ? "active"
                        : "",
                    ]}
                    onClick={() => updateData(step, StepValueType.BeenThere)}
                  >
                    Been there
                  </RoundedButton>
                  <RoundedButton
                    variant="contained"
                    className={[
                      classes.stepOptionButton,
                      data[step.id] &&
                      data[step.id].value === StepValueType.ThereNow
                        ? "active"
                        : "",
                    ]}
                    onClick={() => updateData(step, StepValueType.ThereNow)}
                  >
                    There now
                  </RoundedButton>
                </div>
              </div>
            );
          })}
        </DialogContent>
      )}

      <IconButton
        aria-label="close"
        className={classes.closeButton}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>

      {isSuccess && (
        <IconButton
          aria-label="close"
          className={classes.backButton}
          onClick={() => setIsSuccess(false)}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      )}
    </Dialog>
  );
}
