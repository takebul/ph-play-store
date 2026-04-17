import React from "react";
import Banner from "../../components/homepage/Banner";
import TrendingApps from "../../components/homepage/TrendingApps";
import Stats from "../../components/homepage/Stats";

const Homepage = () => {
  return (
    <>
      <Banner />
      <Stats />
      <TrendingApps />
    </>
  );
};

export default Homepage;
