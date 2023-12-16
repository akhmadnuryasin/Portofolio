import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Content from "../components/Content";

const Portfolio = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero
        page="portfolio"
        title="I'm a frontend developer based in central java, Indonesia."
        desc="Since 2020, I've enjoyed turning complex problems into simple, beautiful and intuitive designs. When I'm not pushing pixels, you'll find me cooking, gardening or working out in the park."
      />
      <Content />
      <Footer />
    </div>
  );
};

export default Portfolio;
