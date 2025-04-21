import React from "react";

const Benefits = () => {
  return (
    <>
      <div className="py-12">
        <div className="w-full md:w-11/12 lg:w-9/12 mx-auto">
          <div className="flex flex-col gap-20 lg:gap-30">
            <div className="flex 2xl:flex-row flex-col items-start 2xl:items-center justify-between gap-12 md:gap-16 lg:gap-20">
              <div className="w-full lg:w-[60%] 2xl:w-[50%]">
                <img src="/Images/3.jpg" alt="" />
              </div>
              <div className="w-full 2xl:w-[50%] space-y-6 text-center lg:text-left">
                <h3 className="text-blue-500 text-lg md:text-xl 2xl:text-2xl font-medium">
                  Why DocTime?
                </h3>
                <h1 className="text-black text-2xl md:text-3xl/12 lg:text-4xl/15 2xl:text-5xl font-bold leading-tight">
                  Bangladesh’s leading healthcare app for online doctor
                  consultation
                </h1>
                <div className="space-y-6">
                  <div className="flex gap-3 md:gap-6">
                    <img
                      className="size-6 lg:size-8 mt-1"
                      src="https://cdn-icons-png.flaticon.com/128/17927/17927110.png"
                      alt=""
                    />
                    <p className="text-black text-lg 2xl:text-2xl/9">
                      Access any GP or specialist doctor you need at anytime
                      from anywhere.
                    </p>
                  </div>
                  <div className="flex gap-3 md:gap-6">
                    <img
                      className="size-6 lg:size-8 mt-1"
                      src="https://cdn-icons-png.flaticon.com/128/16208/16208195.png"
                      alt=""
                    />
                    <p className="text-black text-lg 2xl:text-2xl/9">
                      Access to online prescriptions, medicine delivery, and
                      diagnostic tests.
                    </p>
                  </div>
                  <div className="flex gap-3 md:gap-6">
                    <img
                      className="size-6 lg:size-8 mt-1"
                      src="https://cdn-icons-png.flaticon.com/128/753/753344.png"
                      alt=""
                    />
                    <p className="text-black text-lg 2xl:text-2xl/9">
                      Easy subscription packages to protect you and your loved
                      one’s health and wellbeing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
              <div className="w-full lg:w-[60%] 2xl:w-[60%] space-y-4 text-center lg:text-left">
                <h2 className="text-black text-2xl md:text-3xl/12 lg:text-4xl/15 2xl:text-5xl font-bold leading-tight">
                  Access convenient online Healthcare with DocTime
                </h2>
                <p className="text-gray-500 text-lg 2xl:text-xl">
                  DocTime offers you the convenience of accessing care from
                  anywhere, saving time, and ensuring you to get the attention
                  you need without the hassle of traveling to a clinic. Whether
                  it's for routine check-ups, follow-ups, or managing ongoing
                  health conditions, online consultations provide a flexible and
                  efficient solution. Embrace the future of healthcare by
                  exploring our online consultation options today.
                </p>
              </div>
              <div className="w-full lg:w-[40%] 2xl:w-[30%] flex items-center justify-center">
                <img src="/Images/4.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
