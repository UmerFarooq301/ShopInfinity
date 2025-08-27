import React from "react";
import appstorebtn from "../../assets/appstore-btn.webp";
import American from '../../assets/American.webp'
import Master from '../../assets/Master.webp'
import Visa from '../../assets/visa.webp'
import { NavLink } from "react-router-dom";
import { LiaCopyrightSolid } from "react-icons/lia";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0f2027] mt-8 pb-5">
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-2 mt-10 max-w-screen-xl w-full ">
          {/* Social Media Icons */}
          <div>
            <div className="w-52 ml-3">
              <img src={appstorebtn} alt="" />
            </div>
            <div className="flex mt-4 ml-5 space-x-4">
              <div className=" text-white text-3xl">
                <FaFacebook />
              </div>
              <div className=" text-white text-3xl ">
                <FaInstagram />
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  className="w-8 h-8 fill-white"
                >
                  <path d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Link */}

          <div>
            <h1 className="text-white text-2xl font-bold">Useful Links</h1>

            <div className="mt-3 ml-3 cursor-pointer space-y-2">
              <div>
                <NavLink
                  to="/"
                  className="text-white text-md hover:text-[#FACC15] transition-colors duration-200"
                >
                  Home
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/about"
                  className="text-white text-md hover:text-[#FACC15] transition-colors duration-200"
                >
                  About
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/products"
                  className="text-white text-md hover:text-[#FACC15] transition-colors duration-200"
                >
                  Product
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/newarrival"
                  className="text-white text-md hover:text-[#FACC15] transition-colors duration-200"
                >
                  New Arrivals
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/contact"
                  className="text-white text-md hover:text-[#FACC15] transition-colors duration-200"
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
          <div>
            {/* Categories */}

            <h1 className="text-white text-2xl font-bold">Categories</h1>
            <div className="mt-3 ml-3 cursor-pointer space-y-2">
              <p className="text-white text-md hover:text-[#FACC15] transition-colors duration-200">
                Men's Tradional Wear
              </p>
              <p className="text-white text-md hover:text-[#FACC15] transition-colors duration-200">
                Casual & Western Wear
              </p>
              <p className="text-white text-md hover:text-[#FACC15] transition-colors duration-200">
                Women’s Clothing
              </p>
              <p className="text-white text-md hover:text-[#FACC15] transition-colors duration-200">
                Footwear
              </p>
              <p className="text-white text-md hover:text-[#FACC15] transition-colors duration-200">
                Watches & Accessories
              </p>
              <p className="text-white text-md hover:text-[#FACC15] transition-colors duration-200">
                Electronics & Gadgets
              </p>
              <p className="text-white text-md hover:text-[#FACC15] transition-colors duration-200">
                Sports & Fitness
              </p>
              <p className="text-white text-md hover:text-[#FACC15] transition-colors duration-200">
                Groceries & Essentials
              </p>
              <p className="text-white text-md hover:text-[#FACC15] transition-colors duration-200">
                Kid & Toys
              </p>
              <p className="text-white text-md hover:text-[#FACC15] transition-colors duration-200">
                Pet Care & Supplies
              </p>
            </div>
          </div>

          {/* News Letter */}

          <div>
            <h1 className="text-white text-2xl font-bold">News Letter</h1>
            <div className="mt-3 ml-3 cursor-pointer space-y-2">
              <div>
                <p className="text-white text-lg">
                  Subscribe to get updates on new arrivals and exclusive offers.
                </p>
              </div>
              <div className="text-white mt-5 flex relative">
                <input
                  type="text"
                  placeholder="Your Email"
                  className=" text-white text-lg outline-none border-solid border-2 border-white w-[300px] pl-8 pr-16 h-16 focus:text-xl "
                />
                <FaLongArrowAltRight
                tabIndex={0}
                 className="absolute text-white top-6 left-32 text-lg hover:scale-125 transition-transform duration-300 outline-none focus:ml-2" />

                <input
                  type="submit"
                  value="Subscribe"
                  className="bg-[#FACC15] text-white pt-3 pb-3 pl-7 pr-7 mt-2 ml-4 rounded-xl hover:bg-yellow-500 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <hr className="bg-white text-white w-full mt-6" />
      </div>

      {/* All rghts reserved */}

      <div className="mt-5 mb-5 flex justify-center">
        <LiaCopyrightSolid className="text-lg text-white mr-2 mt-2" />
        <span className="text-white text-lg text-center">
          2025 Shopinfinity All rights reserved.
        </span>
      </div>

{/* Payment Methods */}
      <div className="flex justify-center space-x-2">
        <div className="w-8 h-2">
          <img src={American} alt="American Card" />
        </div>

        <div className="w-8 h-2">
          <img src={Master} alt="Master Card" />
        </div>

        <div>
          <img src={Visa} alt="Visa Card" className="w-9 h-7"/>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
