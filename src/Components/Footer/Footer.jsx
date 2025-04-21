import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div>
        <footer className="bg-[url('/Images/FooterBGImg.png')] text-white py-10">
          <div className="w-11/12 lg:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 justify-between gap-20">
            <div>
              <Link to="/">
                <h2 className="text-2xl font-bold flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg mr-2">
                    <img
                      src="/Images/logoWhite.png"
                      alt="DocTime"
                      className=""
                    />
                  </div>
                  DocTime
                </h2>
              </Link>
              <p className="mt-2 text-base">
                DocTime is the number 1 healthcare service provider in
                Bangladesh, based on one million downloads and ratings on the
                Play Store.
              </p>
              <div className="mt-4">
                <p className="flex items-center gap-2">
                  <span>
                    <IoCallOutline />
                  </span>{" "}
                  01580768366
                </p>
                <p className="flex items-center gap-2">
                  <span>
                    <IoMailOutline />
                  </span>{" "}
                  khairulislamseam01@gmail.com
                </p>
              </div>
              <div className="flex gap-3 mt-4 text-xl">
                <div className="bg-white rounded-full p-2 text-blue-500 cursor-pointer hover:text-blue-600">
                  <FaFacebookF />
                </div>
                <div className="bg-white rounded-full p-2 text-blue-500 cursor-pointer hover:text-blue-600">
                  <FaLinkedinIn />
                </div>
                <div className="bg-white rounded-full p-2 text-blue-500 cursor-pointer hover:text-blue-600">
                  <FaInstagram />
                </div>
                <div className="bg-white rounded-full p-2 text-blue-500 cursor-pointer hover:text-blue-600">
                  <FaYoutube />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h3 className="font-semibold">Services</h3>
                  <ul className="text-sm space-y-3 mt-2">
                    <li>
                      <Link to="/departments_symptoms">Consultation</Link>
                    </li>
                    <li>
                      <Link to="/subscription_plans">Health Plans</Link>
                    </li>
                    <li>
                      <Link to="/products">Products</Link>
                    </li>
                    <li>
                      <Link to="/home_diagnostics">Hospital Partners</Link>
                    </li>
                    <li>
                      <Link to="/add_to_cart">Add to Cart</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">More</h3>
                  <ul className="text-sm space-y-3 mt-2">
                    <li>
                      <Link to="/doctors">Our Doctors</Link>
                    </li>
                    <li>
                      <Link to="/products">Products</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blogs</Link>
                    </li>
                    <li>
                      <Link to="/contact_us">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="font-semibold">Downloads</h3>
                <div className="mt-3 space-y-2">
                  <img
                    src="/Images/Play_Store.png"
                    alt="Google Play"
                    className="w-26 cursor-pointer"
                  />
                  <img
                    src="/Images/App_Store.png"
                    alt="App Store"
                    className="w-26 cursor-pointer"
                  />
                  <img
                    src="/Images/browser.png"
                    alt="Browser"
                    className="w-26 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </footer>
        <p className="text-center text-sm py-4 bg-white text-gray-600">
          Copyright © 2025 DocTime. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
