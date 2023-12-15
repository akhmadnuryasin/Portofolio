import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Content from "../components/Content";

const Contact = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero
        page="contact"
        title="Get in touch with me via social media or email."
        desc="I am available for freelance work. Connect with me via and call in to my account."
      />
      <section className="py-[96px] px-[43px] tablet:px-[150px] bg-[#fafafa]">
        <h2 className="text-4xl font-normal text-gray-700 dark:text-white">
          Send me an email
        </h2>

        <form>
          <div className="grid grid-cols-1 tablet:grid-cols-2 tablet:gap-[40px] mt-4">
            <div>
              <div className="mb-[24px]">
                <label
                  className="text-gray-700 dark:text-gray-200 font-light"
                  for="username"
                >
                  Name
                </label>
                <input
                  id="username"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div className="mb-[24px]">
                <label
                  className="text-gray-700 dark:text-gray-200 font-light"
                  for="username"
                >
                  Email
                </label>
                <input
                  id="username"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div className="h-full">
              <label
                className="text-gray-700 dark:text-gray-200 font-light"
                for="username"
              >
                Message
              </label>
              <input
                id="username"
                type="text"
                className="h-[140px] block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex tablet:justify-end justify-start mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Send Email
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
