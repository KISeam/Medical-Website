import React from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { VscDeviceCameraVideo } from "react-icons/vsc";
import { Link } from "react-router-dom";

const DoctorCardDesign = ({
  productId,
  image,
  name,
  education,
  specialization,
  rating,
  totalRating,
  experienceYears,
  consultationFee,
}) => {
  return (
    <>
      <Link
        to={`/doctors/${productId}`}
        className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-2xl shadow-lg duration-300"
      >
        <div className="relative">
          <img src={image} alt={name} className="w-full h-48 object-cover" />
          <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
            <FaRegHeart className="h-5 w-5 text-gray-600 hover:text-red-500 cursor-pointer" />
          </div>
        </div>
        <div className="p-4 space-y-2">
          <h3 className="text-gray-700 font-bold text-lg">{name}</h3>
          <p className="text-sm text-gray-500 truncate">{education}</p>
          <p className="text-blue-500 text-sm">{specialization}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-sm ${
                      i < rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-600 ml-1">{rating}</span>
              <span className="text-xs text-gray-600 ml-1">
                ({totalRating})
              </span>
            </div>
            <span className="text-xs text-gray-600 ml-1">
              {experienceYears}+ Years
            </span>
          </div>
          <div className="mt-3 flex justify-between items-center">
            <p className="text-lg font-bold text-blue-500">
              &#2547; {consultationFee}
            </p>
            <button className="flex items-center gap-1 bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600 transition-colors cursor-pointer">
              <VscDeviceCameraVideo className="h-4 w-4" />
              <span>See Doctor Now</span>
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default DoctorCardDesign;
