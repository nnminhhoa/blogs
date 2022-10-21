import React from "react";
import SectionMain from "../components/Section/SectionMain";
import SectionPolicy from "../components/Section/SectionPolicy";
import Slide from "../components/Slide/Slide";
import Trend from "../components/Trend/Trend";

const Home = () => {
  return (
    <>
      <Slide />
      <Trend />
      <SectionMain />
      <SectionPolicy />
    </>
  );
};

export default Home;
