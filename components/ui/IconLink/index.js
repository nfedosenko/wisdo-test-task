import React from "react";
import Link from "next/link";
import { styled } from "@material-ui/core/styles";

const StyledLink = styled("a")({
  backgroundColor: "transparent",
  textDecoration: "none",
  width: 250,
  height: 50,
  display: "flex",
  alignItems: "center",
  padding: "0 10px",
  fontWeight: "bolder",
  color: "#403d37",
  "&:hover": {
    backgroundColor: "#f1eeff",
    color: "#8b5ffe",
  },
  "&.active": {
    backgroundColor: "#f1eeff",
    color: "#8b5ffe",
  },
});

export default function IconLink({ text, to, isActive, icon }) {
  return (
    <Link href={to} passHref>
      <StyledLink className={isActive ? "active" : ""}>
        {icon}
        <span style={{ paddingLeft: 8 }}>{text}</span>
      </StyledLink>
    </Link>
  );
}
