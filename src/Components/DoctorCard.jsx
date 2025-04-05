import React, { useEffect } from "react";
import { FaChevronRight, FaStar } from "react-icons/fa";
import { VscDeviceCameraVideo } from "react-icons/vsc";

const DoctorCard = ({
  id,
  name,
  education,
  category,
  workingAt,
  experienceYears,
  rating,
  totalRating,
  image,
  activity,
  consultationFee,
}) => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <div>
        <div className="p-3 md:p-6 bg-white rounded-2xl">
          <div className="flex  flex-wrap justify-between gap-3">
            <div className="flex md:items-center gap-4 md:gap-8">
              <div className="space-y-2.5">
                <div className="w-24 h-24 md:w-30 md:h-30 rounded-xl overflow-hidden relative">
                  <img
                    className="overflow-hidden object-cover w-full h-full"
                    src={image}
                    alt="Image"
                  />
                  <div className="absolute bottom-0 w-full px-2 py-1 flex items-center gap-1 bg-white/40">
                    <FaStar className="text-yellow-500 text-sm md:text-lg" />
                    <p className="text-black font-bold text-xs md:text-lg">
                      {rating}
                    </p>
                    <p className="text-gray-400 text-xs md:text-sm">
                      {totalRating}
                    </p>
                  </div>
                </div>
                <div className="space-y-1 text-center text-gray-600">
                  <h4 className="font-bold">{experienceYears}+ Years</h4>
                  <p className="text-xs">Experience</p>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-black font-bold text-base md:text-lg">
                  {name}
                </h3>
                <p className="text-xs md:text-sm text-gray-600">{education}</p>
                <p className="text-blue-500 text-xs md:text-base">{category}</p>
                <p className="text-xs md:text-sm text-gray-400">Working in</p>
                <p className="text-xs md:text-sm text-gray-600">{workingAt}</p>
                <p className="text-xs md:text-sm text-gray-400">
                  Avaliable for
                </p>
                <div className="flex items-center gap-1 text-green-500 text-xs md:text-sm">
                  <VscDeviceCameraVideo className="md:text-base" />
                  <p>Instant Video Call</p>
                </div>
              </div>
            </div>
            <div className="flex gap-6 border-t md:border-t-0 md:border-l border-gray-300 pt-2 md:pt-0 md:px-10 w-full md:w-fit">
              <div className="flex items-center justify-between gap-4 w-full md:w-fit">
                <div className="flex md:block items-center md:space-y-2">
                  <div className="flex items-center">
                    <p className="text-xl md:text-2xl text-blue-500 font-bold">
                      &#2547; {consultationFee}
                    </p>
                    <span className="ml-2 font-semibold text-gray-500 text-xs md:text-sm">
                      (Inc. VAT)
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-500 ml-6 md:ml-0">
                    Per Consulitation
                  </p>
                </div>
                <FaChevronRight className="text-lg text-gray-500" />
              </div>
            </div>
            <div className="absolute top-3 right-0 bg-green-500 rounded-tl-full rounded-bl-full px-2 md:px-4 md:py-1 text-white">
              <p className="text-xs md:text-lg">{activity}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorCard;
