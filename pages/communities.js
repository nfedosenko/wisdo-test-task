import React from "react";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { getCommunities } from "../services/ApiService";
import MainLayout from "../layouts/MainLayout";
import Carousel from "../components/Carousel";
import JoinCommunityModal from "../components/JoinCommunityModal";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 850,
  },
}));

export default function CommunitiesPage({ communities = [] }) {
  const [modalData, setModalData] = useState(null);
  const classes = useStyles();

  return (
    <MainLayout>
      <div className={classes.root}>
        {communities.map((community) => {
          return (
            <Carousel
              items={community.items}
              title={community.categoryName}
              key={community.categoryName}
              onClick={(data) => setModalData(data)}
            />
          );
        })}
      </div>
      {modalData && (
        <JoinCommunityModal
          modalData={modalData}
          onClose={() => setModalData(null)}
        />
      )}
    </MainLayout>
  );
}

export async function getStaticProps(context) {
  const communities = await getCommunities();
  return {
    props: {
      communities,
    },
  };
}
