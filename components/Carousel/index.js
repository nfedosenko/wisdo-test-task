import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReactCarousel, { Dots } from "@brainhubeu/react-carousel";
import Typography from "@material-ui/core/Typography";
import membersRounder from "../../utils/membersRounder";

const useStyles = makeStyles((theme) => ({
  root: {},
  sliderTitle: {
    fontSize: 20,
    color: "#76736f",
    fontWeight: "bolder",
    margin: 15,
    marginLeft: 50,
  },
  itemTitle: {
    fontWeight: "bolder",
  },
  itemMembers: {
    fontSize: 12,
    color: "#707275",
  },
  itemRoot: {
    cursor: "pointer",
  },
  itemImage: {
    borderRadius: 10,
    width: 170,
    height: 120,
    objectFit: "cover",
  },
  carousel: {
    alignItems: "flex-start",
  },
}));

export default function Carousel({
  items,
  onClick = () => {},
  itemsPerPage = 4,
  title,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.sliderTitle}>{title}</Typography>
      <ReactCarousel
        slidesPerPage={itemsPerPage}
        arrows
        infinite
        breakpoints={{
          600: {
            slidesPerPage: 1,
          },
        }}
      >
        {items.map((item) => {
          return (
            <div
              className={classes.itemRoot}
              key={item.lifeChallengeId}
              onClick={() => onClick(item)}
            >
              <img
                className={classes.itemImage}
                alt={item.description}
                src={item.image}
              />
              <Typography className={classes.itemTitle}>
                {item.title}
              </Typography>
              <Typography className={classes.itemMembers}>
                {membersRounder(item.membersCount)} Members
              </Typography>
            </div>
          );
        })}
      </ReactCarousel>
    </div>
  );
}
