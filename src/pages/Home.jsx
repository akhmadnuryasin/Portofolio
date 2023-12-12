import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <section className="flex justify-center">
        <h3 className="text-center tablet:top-[102vh] bg-[#fafafa] tablet:px-12">
          SOME OF MY LATEST WORK
        </h3>
      </section>
      <div className="tablet:mx-3 gap-[25px] px-[32px] pt-[30px] pb-[64px] flex flex-wrap justify-center items-center">
        <Card
          title="My UI design book"
          tag="Book"
          source="https://images.unsplash.com/photo-1551650992-ee4fd47df41f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        />

        <Card
          title="To Do List"
          tag="App"
          source="https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwfGVufDB8fDB8fHww"
        />
        <Card
          title="Been Grader"
          tag="App"
          source="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
