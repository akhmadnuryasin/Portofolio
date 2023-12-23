import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Card from "../components/Card";
import portfolioData from "../data/portfolioCard";

const Portfolio = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero
        page="portfolio"
        title="Check out some of my latest UI/UX design case studies."
        desc="I've worked at start-ups, tech companies and corporates on a range of different projects, including design systems, websites and apps."
      />
      <div className="px-[32px] py-[64px]">
        <h3 className="text-center mb-7">COMPLETED MISSIONS</h3>
        <div className="grid grid-cols-1 gap-5 mid:grid mid:grid-cols-2 mid:gap-5 tablet:grid tablet:grid-cols-3 tablet:gap-5 justify-center items-center text-6xl">
          {portfolioData.map((item, index) => {
            return <Card key={index} title={item.title} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
