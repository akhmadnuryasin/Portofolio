import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Card from "../components/Card";
import featuresData from "../data/featuresCard";

const Book = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero
        page="features"
        title="What I Do"
        desc="Since 2020, I've enjoyed turning complex problems into simple, beautiful and intuitive designs. When I'm not pushing pixels, you'll find me cooking, gardening or working out in the park."
      />
      <div className="px-[32px] py-[64px]">
        <h3 className="text-center mb-7">MY WEAPONS</h3>
        <div className="grid grid-cols-1 gap-5 mid:grid mid:grid-cols-2 mid:gap-5 tablet:grid tablet:grid-cols-3 tablet:gap-5 justify-center items-center text-6xl">
          {featuresData.map((item, index) => {
            return <Card key={index} title={item.title} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Book;
