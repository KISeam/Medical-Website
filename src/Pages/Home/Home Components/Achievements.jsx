import React from "react";

const Achievements = () => {
  return (
    <>
      <div className="bg-[#EEF7FF] py-12">
        <div className="w-full md:w-11/12 lg:w-9/12 mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-x-10 md:gap-y-8 lg:gap-x-16 lg:gap-y-12 text-center">
            <div className="flex flex-col items-center gap-6 w-56">
              <div className="bg-white p-5 rounded-full w-fit">
                <img
                  className="size-14"
                  src="https://cdn-icons-png.flaticon.com/128/2838/2838590.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  10 Minutes
                </h3>
                <p className="text-lg text-gray-600">
                  Average consultation waiting time
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6 w-56">
              <div className="bg-white p-5 rounded-full w-fit">
                <img
                  className="size-14"
                  src="https://cdn-icons-png.flaticon.com/128/2359/2359722.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  4M+
                </h3>
                <p className="text-lg text-gray-600">
                  People under healthcare coverage
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6 w-56">
              <div className="bg-white p-5 rounded-full w-fit">
                <img
                  className="size-14"
                  src="https://cdn-icons-png.flaticon.com/128/4115/4115724.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  561K+
                </h3>
                <p className="text-lg text-gray-600">
                  Video consultation successfully completed
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6 w-56">
              <div className="bg-white p-5 rounded-full w-fit">
                <img
                  className="size-14"
                  src="https://cdn-icons-png.flaticon.com/128/8163/8163551.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  95%
                </h3>
                <p className="text-lg text-gray-600">
                  Customers gave 5 star rating
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6 w-56">
              <div className="bg-white p-5 rounded-full w-fit">
                <img
                  className="size-14"
                  src="https://cdn-icons-png.flaticon.com/128/4208/4208397.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  1+ Million
                </h3>
                <p className="text-lg text-gray-600">
                  App download on Playstore
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;
