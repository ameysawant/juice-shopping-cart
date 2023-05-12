import React from "react";
import MainSlider from "./mainslider/MainSlider";
import Youtube from "./youtube/Youtube";
import About from "./about/About";
import ProductSlider from "./productslider/ProductSlider";
import Team from "./team/Team";

const Index = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <MainSlider />
      <Youtube />
      <About />
      <ProductSlider />
      <Team />
    </>
  );
};

export default Index;
