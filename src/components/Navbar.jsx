import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  function handleNavigation() {
    setIsNavVisible(!isNavVisible);
  }

  return (
    <header
      id="header"
      className="w-full min-h-[92px] p-x[60px] bg-black flex justify-center text-white items-center"
    >
      <div className="row h-full">
        <div className="tablet:flex flex w-screen h-full items-center tablet:justify-center px-10">
          <Link id="logo" className="logo mr-auto" to="/">
            Logo
          </Link>
          <div className="icon-nav tablet:hidden" onClick={handleNavigation}>
            <RxHamburgerMenu
              size={25}
              color={isNavVisible ? "#848484" : null}
            />
          </div>
          <nav
            className={`tablet:flex tablet:relative z-50 tablet:justify-end tablet:top-0 top-[92px] left-[0px] bg-[#222222] tablet:bg-black w-screen absolute ${
              isNavVisible ? "" : "hidden"
            }`}
          >
            <ul
              id="nav"
              className="flex tablet:flex-row flex-col text-center tablet:border-hidden"
            >
              <li className="page_item page-item-2 h-16  border-b tablet:border-hidden hover:text-[#757575] border-[#323232] flex items-center justify-center">
                <Link to="/about" href="" className="px-[18px]">
                  about
                </Link>
              </li>
              <li className="page_item hover:text-[#757575] page-item-833 h-16 border-b tablet:border-hidden border-[#323232] flex items-center justify-center ">
                <Link to="/book" className="px-[18px]">
                  features
                </Link>
              </li>
              <li className="page_item page-item-7 hover:text-[#757575] h-16 border-b tablet:border-hidden border-[#323232] flex items-center justify-center">
                <Link to="/portfolio" className="px-[18px]">
                  portfolio
                </Link>
              </li>
              <li className="page_item page-item-9 hover:text-[#757575] h-16 border-b tablet:border-hidden border-[#323232] flex items-center justify-center">
                <Link to="/blog" className="px-[18px]">
                  resume
                </Link>
              </li>
              <li className="page_item page-item-11 hover:text-[#757575] h-16 border-b tablet:border-hidden border-[#323232] flex items-center justify-center">
                <Link to="/contact" className="px-[18px]">
                  contact
                </Link>
              </li>
              <li className="tablet:w-[200px] w-full flex items-center justify-center tablet:ml-9 h-16">
                <ul className="social flex items-center w-[200px] justify-between">
                  <li className="email hidden">
                    <span
                      id="email-tooltip"
                      tooltip="Click to copy my email address to your clipboard 😀"
                    >
                      <a
                        id="email"
                        data-clipboard-text="email address goes here"
                      >
                        email
                      </a>
                    </span>
                  </li>
                  <li className="twitter hover:text-[#757575]">
                    <Link
                      to="https://x.com/nuryasin_a80599?t=-Flzjc0Dwbvxo7FphkGO5A&s=35"
                      title="Follow me on Twitter"
                      target="_blank"
                    >
                      <FaTwitter size={24} />
                    </Link>
                  </li>
                  <li className="linkedin hover:text-[#757575]">
                    <Link
                      to="https://www.linkedin.com/in/akhmad-nuryasin-3378121b7/"
                      title="Connect with me on Linkedin"
                      target="_blank"
                    >
                      <FaLinkedinIn size={24} />
                    </Link>
                  </li>
                  <li className="facebook hover:text-[#757575]">
                    <Link
                      to="https://www.facebook.com/akhmad.nuryasin.90?mibextid=rS40aB7S9Ucbxw6v"
                      title="Like me on Facebook"
                      target="_blank"
                    >
                      <FaFacebookF size={24} />
                    </Link>
                  </li>
                  <li className="instagram hover:text-[#757575]">
                    <Link
                      to="https://instagram.com/akhmadnuryasin_171?igshid=MzMyNGUyNmU2YQ=="
                      title="Follow me on Instagram"
                      target="_blank"
                    >
                      <FaInstagram size={24} />
                    </Link>
                  </li>
                  <li className="dribbble hidden">
                    <Link to="/" title="See my Dribbble shots" target="_blank">
                      dribbble
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
