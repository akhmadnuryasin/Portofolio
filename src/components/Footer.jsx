import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative z-20">
      <footer
        id="footer"
        role="contentinfo"
        className="px-[42px] py-[40px] bg-[#f5f5f5] flex items-center relative z-20"
      >
        <div className="row w-full">
          <div className="flex tablet:justify-between justify-center items-center">
            <div className="left">
              <Link to="" className="transition">
                © 2023 Akhmad Nuryasin
              </Link>
            </div>
            <nav id="nav-footer" className="hidden tablet:block">
              <ul className="flex">
                <li className="page_item page-item-2 mr-5">
                  <Link to="">about</Link>
                </li>
                <li className="page_item page-item-833 mr-5">
                  <Link to="">book</Link>
                </li>
                <li className="page_item page-item-7 mr-5">
                  <Link to="">portfolio</Link>
                </li>
                <li className="page_item page-item-9 mr-5">
                  <Link to="">blog</Link>
                </li>
                <li className="page_item page-item-11 mr-5">
                  <Link to="">contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-12 tablet:hidden z-10">
        <div className="h-[118px] w-[118px] bg-[#f5f5f5] rounded-full overflow-hidden">
          <Link to="#" className="top"></Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
