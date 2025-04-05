import React from "react";
import Button from "../../../Components/Button";

const GetInTouch = () => {
  return (
    <>
      <div className="bg-[#EEF7FF] py-12">
        <div className="w-11/12 md:w-8/11 lg:w-6/12 2xl:w-5/12 mx-auto">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center">
              Get in Touch
            </h2>
            <p className="text-center text-gray-500 text-lg lg:text-xl mb-10">
              We're here to help. Send your query or question below and provide
              us with as much detail as possible. We will answer your query as
              soon as possible. We aim to reply to your query within 24 hours.
            </p>
            <div className="bg-white rounded-lg p-6 space-y-4 text-gray-700 shadow-lg">
              <div className="flex gap-4">
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline focus:border-blue-500 outline-none"
                  type="text"
                  placeholder="Enter Your Name"
                />
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline focus:border-blue-500 outline-none"
                  type="email"
                  placeholder="Enter Your Email"
                />
              </div>
              <textarea
                name="query"
                placeholder="Enter Your Query"
                className="w-full h-50 px-3 py-2 resize-none bg-white border border-gray-300 focus:outline focus:border-blue-500 rounded-md outline-none"
              />
              <Button text={"Submit"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
