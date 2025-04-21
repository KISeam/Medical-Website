import React from "react";
import Button from "../../../Components/Button";
import { Link } from "react-router-dom";

const BuyMedicines = () => {
  return (
    <>
      <div className="py-12 border-b border-gray-400">
        <div className="w-11/12 lg:w-9/12 mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16 lg:gap-20">
            <div className="w-full lg:w-[50%] 2xl:w-[40%]">
              <img src="/Images/5.jpg" alt="" />
            </div>
            <div className="w-full lg:w-[50%] space-y-6 lg:space-y-8 text-center lg:text-left">
              <h1 className="text-black text-2xl md:text-3xl/12 lg:text-4xl/15 2xl:text-5xl font-bold leading-tight">
                Buy Medicines online from home
              </h1>
              <p className="text-gray-500 text-lg lg:text-xl">
                Authentic medicines with discounts & free home delivery within
                Dhaka city
              </p>
              <Link to="/products">
                <Button text={"Buy Online"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyMedicines;
