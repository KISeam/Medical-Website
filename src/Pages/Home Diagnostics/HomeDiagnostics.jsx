import React, { useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import Button from "../../Components/Button";

const HomeDiagnostics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="py-12">
        <div className="w-11/12 lg:w-6/12 mx-auto">
          <div className="space-y-10">
            <img src="/Images/8.jpg" alt="" />
            <div className="space-y-2 text-center">
              <div className="flex items-center justify-center gap-2 text-black">
                <FaLocationDot className="text-base md:text-lg" />
                <h1 className="text-lg md:text-2xl 2xl:text-3xl font-bold leading-tight">
                  Sample Collection Location
                </h1>
              </div>
              <p className="text-gray-600 text-base md:text-lg">
                We need your location to ensure that we're currently operating
                in your area
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.49930322517!2d90.25487367081577!3d23.781067238446077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1742781941281!5m2!1sen!2sbd"
              className="w-full rounded-lg"
              height="320"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="flex justify-center">
              <Button text={"Confirm Location"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDiagnostics;
