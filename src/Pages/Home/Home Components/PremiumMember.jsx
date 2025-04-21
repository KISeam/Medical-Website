import React from "react";
import Button from "../../../Components/Button";
import { Link } from "react-router-dom";

const PremiumMember = () => {
  return (
    <>
      <div className="bg-[#EEF7FF] py-12">
        <div className="w-full md:w-11/12 lg:w-9/12 mx-auto">
          <div className="flex 2xl:flex-row flex-col items-start 2xl:items-center justify-between gap-12 md:gap-16 lg:gap-20">
            <div className="w-full lg:w-[60%] 2xl:w-[40%]">
              <img src="/Images/6.jpg" alt="" />
            </div>
            <div className="w-full 2xl:w-[60%] space-y-6 text-center lg:text-left">
              <h3 className="text-blue-500 text-lg md:text-xl 2xl:text-2xl font-medium">
                Become a Premium Member
              </h3>
              <h1 className="text-black text-2xl md:text-3xl/12 lg:text-4xl/15 2xl:text-5xl font-bold leading-tight">
                A secure future for you and your family
              </h1>
              <p className="text-gray-500 text-lg 2xl:text-xl">
                DocTime is the leading digital healthcare app in the country.
                DocTime is committed to bringing modern healthcare to people
                along with 24/7 doctor video consultation. DocTime healthcare
                package is there for healthcare assurance and your secure
                healthy future. Choose your favorite packages based on your
                needs. Anyone can enjoy this service by paying a one-time annual
                subscription fee.
              </p>
              <Link to="/subscription_plans">
              <Button text={"View All Packages"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PremiumMember;
