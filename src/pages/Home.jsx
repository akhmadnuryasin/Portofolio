import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Card from "../components/Card";
import homeData from "../data/homeCard";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero
        page="home"
        title="What I Do"
        desc="Since 2020, I've loved turning complex problems into simple, beautiful, and intuitive code. When I'm not pressing pixels, you'll find me learning new things, gardening, or exercising in the park."
      />
      <div className="px-[32px] py-[64px]">
        <h3 className="text-center mb-7">SOME OF MY LATEST WORK</h3>
        <div className="grid grid-cols-1 gap-5 mid:grid mid:grid-cols-2 mid:gap-5 tablet:grid tablet:grid-cols-3 tablet:gap-5 justify-center items-center text-6xl">
          {homeData.map((item, index) => {
            return <Card key={index} title={item.title} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
