import React from "react";
import { BiLogoTelegram } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoMedium } from "react-icons/io5";

const TopHeader = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#003366]  to-[#5A9BD5] py-2">
        <div className="w-11/12 md:w-10/11 lg:w-9/12 mx-auto">
          <div className="flex justify-between items-center py-1 text-white">
            <div className="flex gap-4">
              <IoLogoMedium className="text-lg cursor-pointer" />
              <FaXTwitter className="text-lg cursor-pointer" />
              <FaInstagram className="text-lg cursor-pointer" />
              <BiLogoTelegram className="text-lg cursor-pointer" />
            </div>
            <p className="text-sm md:text-base font-medium">
              Call us: +880 1580768366
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
