import React from "react";
import Button from "../../../Components/Button";
import { Link } from "react-router-dom";

const HomeDiagnosticService = () => {
  return (
    <>
      <div className="py-12">
        <div className="w-11/12 lg:w-9/12 mx-auto">
          <div className="flex 2xl:flex-row flex-col-reverse items-start 2xl:items-center justify-between gap-12 md:gap-16 lg:gap-20">
            <div className="w-full 2xl:w-[60%] space-y-6 text-center lg:text-left">
              <h3 className="text-blue-500 text-lg md:text-xl 2xl:text-2xl font-medium">
                Home Diagnostic Service
              </h3>
              <h1 className="text-black text-2xl md:text-3xl/12 lg:text-4xl/15 2xl:text-5xl font-bold leading-tight">
                Sample collection at your Doorstep
              </h1>
              <p className="text-gray-500 text-lg lg:text-xl">
                Making healthcare easily accessible anytime, anywhere.
              </p>
              <div className="space-y-4 flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <img
                      className="size-6"
                      src="https://cdn-icons-png.flaticon.com/128/17450/17450871.png"
                      alt=""
                    />
                  </div>
                  <p className="text-gray-700">
                    Faster and convenient tests booking
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <img
                      className="size-6"
                      src="https://cdn-icons-png.flaticon.com/128/17450/17450871.png"
                      alt=""
                    />
                  </div>
                  <p className="text-gray-700">
                    Certified professionals will collect sample from home/office
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <img
                      className="size-6"
                      src="https://cdn-icons-png.flaticon.com/128/17450/17450871.png"
                      alt=""
                    />
                  </div>
                  <p className="text-gray-700">
                    Faster and convenient tests booking
                  </p>
                </div>
              </div>
              <Link to="/home_diagnostics">
                <Button text={"Book Test"} />
              </Link>
            </div>
            <div className="w-full lg:w-[50%] 2xl:w-[40%]">
              <img src="/Images/7.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDiagnosticService;
