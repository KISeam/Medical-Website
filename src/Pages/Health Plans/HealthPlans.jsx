import React, { useEffect } from "react";
import Button from "../../Components/Button";

const HealthPlans = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="py-12">
        <div className="w-full md:w-11/12 lg:w-9/12 mx-auto">
          <div className="space-y-10">
            <h1 className="text-center text-2xl lg:text-4xl text-black font-semibold">
              DocTime Health Care and Protect Plans
            </h1>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 space-y-2 md:space-y-4 w-full md:w-96">
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-xl md:text-2xl text-blue-500 font-bold">
                      Jotno
                    </h2>
                    <p className="text-lg md:text-xl font-bold text-black">
                      &#2547; 79{" "}
                      <span className="text-sm font-medium">/monthly</span>
                    </p>
                  </div>
                  <div className="bg-blue-50 p-2 rounded-full">
                    <img
                      className="size-8"
                      src="https://cdn-icons-png.flaticon.com/128/4001/4001528.png"
                      alt=""
                    />
                  </div>
                </div>
                <p className="text-xs md:text-sm text-gray-500">1 Person</p>
                <div className="flex gap-2">
                  <img
                    className="size-4 mt-0.5"
                    src="https://cdn-icons-png.flaticon.com/128/17927/17927110.png"
                    alt=""
                  />
                  <p className="text-gray-600 text-xs md:text-sm">
                    Free 4 consultations with our experienced on duty General
                    Physician doctors
                  </p>
                </div>
                <div className="flex gap-2">
                  <img
                    className="size-4 mt-0.5"
                    src="https://cdn-icons-png.flaticon.com/128/17927/17927110.png"
                    alt=""
                  />
                  <p className="text-gray-600 text-xs md:text-sm">
                    Free 4 consultations with our experienced on duty General
                    Physician doctors
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="bg-blue-500 hover:bg-blue-600 w-full py-2 rounded-lg cursor-pointer">
                    <p className="text-center text-sm md:text-base lg:text-lg">
                      Subscribe now
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 space-y-2 md:space-y-4 w-full md:w-96">
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-xl md:text-2xl text-blue-500 font-bold">
                      Astha
                    </h2>
                    <p className="text-lg md:text-xl font-bold text-black">
                      &#2547; 119{" "}
                      <span className="text-sm font-medium">/monthly</span>
                    </p>
                  </div>
                  <div className="bg-blue-50 p-2 rounded-full">
                    <img
                      className="size-8"
                      src="https://cdn-icons-png.flaticon.com/128/2345/2345454.png"
                      alt=""
                    />
                  </div>
                </div>
                <p className="text-xs md:text-sm text-gray-500">1 Person</p>
                <div className="flex gap-2">
                  <img
                    className="size-4 mt-0.5"
                    src="https://cdn-icons-png.flaticon.com/128/17927/17927110.png"
                    alt=""
                  />
                  <p className="text-gray-600 text-xs md:text-sm">
                    Unlimited audio & video calls with our experienced on duty
                    General Physician doctors
                  </p>
                </div>
                <div className="flex gap-2">
                  <img
                    className="size-4 mt-0.5"
                    src="https://cdn-icons-png.flaticon.com/128/17927/17927110.png"
                    alt=""
                  />
                  <p className="text-gray-600 text-xs md:text-sm">
                    10% discount* on any Specialist Doctor consultation
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="bg-blue-500 hover:bg-blue-600 w-full py-2 rounded-lg cursor-pointer">
                    <p className="text-center text-sm md:text-base lg:text-lg">
                      Subscribe now
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 space-y-2 md:space-y-4 w-full md:w-96">
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-xl md:text-2xl text-blue-500 font-bold">
                      Aponjon
                    </h2>
                    <p className="text-lg md:text-xl font-bold text-black">
                      &#2547; 175{" "}
                      <span className="text-sm font-medium">/monthly</span>
                    </p>
                  </div>
                  <div className="bg-blue-50 p-2 rounded-full">
                    <img
                      className="size-8"
                      src="https://cdn-icons-png.flaticon.com/128/4807/4807695.png"
                      alt=""
                    />
                  </div>
                </div>
                <p className="text-xs md:text-sm text-gray-500">
                  For 4 persons
                </p>
                <div className="flex gap-2">
                  <img
                    className="size-4 mt-0.5"
                    src="https://cdn-icons-png.flaticon.com/128/17927/17927110.png"
                    alt=""
                  />
                  <p className="text-gray-600 text-xs md:text-sm">
                    Unlimited audio & video calls with our experienced on duty
                    General Physician doctors
                  </p>
                </div>
                <div className="flex gap-2">
                  <img
                    className="size-4 mt-0.5"
                    src="https://cdn-icons-png.flaticon.com/128/17927/17927110.png"
                    alt=""
                  />
                  <p className="text-gray-600 text-xs md:text-sm">
                    10% discount* on any Specialist Doctor consultation
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="bg-blue-500 hover:bg-blue-600 w-full py-2 rounded-lg cursor-pointer">
                    <p className="text-center text-sm md:text-base lg:text-lg">
                      Subscribe now
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 space-y-2 md:space-y-4 w-full md:w-96">
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-xl md:text-2xl text-blue-500 font-bold">
                      Momota
                    </h2>
                    <p className="text-lg md:text-xl font-bold text-black">
                      &#2547; 449{" "}
                      <span className="text-sm font-medium">/monthly</span>
                    </p>
                  </div>
                  <div className="bg-blue-50 p-2 rounded-full">
                    <img
                      className="size-8"
                      src="https://cdn-icons-png.flaticon.com/128/4807/4807695.png"
                      alt=""
                    />
                  </div>
                </div>
                <p className="text-xs md:text-sm text-gray-500">For Parents</p>
                <div className="flex gap-2">
                  <img
                    className="size-4 mt-0.5"
                    src="https://cdn-icons-png.flaticon.com/128/17927/17927110.png"
                    alt=""
                  />
                  <p className="text-gray-600 text-xs md:text-sm">
                    Unlimited audio & video calls with our experienced on duty
                    General Physician doctors
                  </p>
                </div>
                <div className="flex gap-2">
                  <img
                    className="size-4 mt-0.5"
                    src="https://cdn-icons-png.flaticon.com/128/17927/17927110.png"
                    alt=""
                  />
                  <p className="text-gray-600 text-xs md:text-sm">
                    Monthly 2 online health screening calls for your parents
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="bg-blue-500 hover:bg-blue-600 w-full py-2 rounded-lg cursor-pointer">
                    <p className="text-center text-sm md:text-base lg:text-lg">
                      Subscribe now
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthPlans;
