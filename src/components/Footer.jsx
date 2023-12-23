import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const year = new Date().getFullYear();

  return (
    <div className="relative z-20">
      <footer
        id="footer"
        role="contentinfo"
        className="px-[42px] py-[40px] mt-16 tablet:mt-0 bg-[#f5f5f5] flex items-center relative z-20"
      >
        <div className="row w-full">
          <div className="flex tablet:justify-between justify-center items-center">
            <div className="left">
              <Link to="" className="transition">
                © {year} Akhmad Nuryasin
              </Link>
            </div>
            <nav id="nav-footer" className="hidden tablet:block">
              <ul className="flex">
                <li className="page_item page-item-2 mr-5">
                  <Link to="/about">about</Link>
                </li>
                <li className="page_item page-item-833 mr-5">
                  <Link to="/features">features</Link>
                </li>
                <li className="page_item page-item-7 mr-5">
                  <Link to="/portfolio">portfolio</Link>
                </li>
                <li className="page_item page-item-9 mr-5">
                  <Link to="/resume">resume</Link>
                </li>
                <li className="page_item page-item-11 mr-5">
                  <Link to="/contact">contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-12 tablet:hidden z-10">
        <div
          onClick={scrollToTop}
          className="h-[118px] w-[118px] bg-[#f5f5f5] rounded-full overflow-hidden"
        >
          <div
            to="#"
            className="absolute left-1/2 transform -translate-x-1/2 -top-3.5"
          >
            <MdOutlineKeyboardArrowUp
              size={90}
              color="white"
              style={{ filter: "drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.1))" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
