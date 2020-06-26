import React from "react";
import Button from "@material-ui/core/Button";
import ExploreIcon from "@material-ui/icons/Explore";
import { styled } from "@material-ui/core/styles";

export const RoundedButton = styled(Button)({ borderRadius: 20 });

export const ExploreCommunitiesButton = (props) => (
  <RoundedButton
    variant="contained"
    color="secondary"
    startIcon={<ExploreIcon />}
    {...props}
  >
    Explore Communities
  </RoundedButton>
);

export const LogInButton = (props) => (
  <RoundedButton variant="outlined" color="primary" {...props}>
    Log in
  </RoundedButton>
);

export const SignUpButton = (props) => (
  <RoundedButton variant="contained" color="primary" {...props}>
    Sign up
  </RoundedButton>
);
