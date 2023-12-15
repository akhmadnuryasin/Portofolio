import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Content from "../components/Content";

const Resume = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero
        page="blog"
        title="I'm a product designer based in sunny Sydney, Australia."
        desc="Since 2005, I've enjoyed turning complex problems into simple, beautiful and intuitive designs. When I'm not pushing pixels, you'll find me cooking, gardening or working out in the park."
      />
      <Content />
      <Footer />
    </div>
  );
};

export default Resume;