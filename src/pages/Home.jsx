import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-screen overflow-x-hidden">
      <Navbar />
      <div className="flex justify-center items-center min-h-[90vh]">
        <h1>Content</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
