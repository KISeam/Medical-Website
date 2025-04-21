import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { VscDeviceCameraVideo } from "react-icons/vsc";
import HeadDetails from "./HeadDetails";
import DoctorCardDesign from "./DoctorCardDesign";

const SingleDoctor = () => {
  const [doctor, setDoctor] = useState(null);
  const [relatedDoctors, setRelatedDoctors] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch("/Doctors-Data/Doctors.json")
      .then((res) => res.json())
      .then((data) => {
        const filterDoctor = data.find((doc) => doc.id == id);
        setDoctor(filterDoctor);
      });
  }, [id]);

  useEffect(() => {
    if (doctor) {
      fetch("/Doctors-Data/Doctors.json")
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch related doctors");
          return res.json();
        })
        .then((data) => {
          const filteredRelatedDoctors = data.filter(
            (item) =>
              item.specialization === doctor.specialization &&
              item.id !== doctor.id
          );
          setRelatedDoctors(filteredRelatedDoctors);
        })
        .catch((error) =>
          console.error("Error fetching related doctors:", error)
        );
    }
  }, [doctor]);

  return (
    <>
      <div className="py-12">
        <div className="w-full md:w-11/12 lg:w-9/12 mx-auto">
          <div className="flex flex-col gap-6 md:gap-10 lg:gap-12">
            <div className="w-full lg:max-w-4xl 2xl:max-w-5xl mx-auto">
              <div>
                {doctor ? (
                  <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-2xl border border-gray-300 p-8">
                    <div className="w-full lg:w-1/2">
                      <div className="relative w-full lg:h-[500px] overflow-hidden rounded-2xl">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                          <FaRegHeart className="h-6 w-6 text-gray-600 hover:text-red-500 cursor-pointer transition-colors duration-300" />
                        </div>
                        <div className="absolute bottom-4 left-4 bg-green-600 px-3 py-1 rounded-full">
                          <p className="text-sm text-white">
                            {doctor.activity}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                      <h1 className="text-3xl font-bold text-gray-900">
                        {doctor.name}
                      </h1>
                      <p className="text-sm text-gray-500 mt-2">
                        {doctor.education}
                      </p>
                      <p className="text-blue-500 text-lg mt-1">
                        {doctor.specialization}
                      </p>

                      <div className="flex items-center space-x-2 mt-4">
                        <div className="flex items-center">
                          <span className="text-yellow-400 flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <FaStar
                                key={i}
                                className={`mr-1 ${
                                  i < doctor.rating
                                    ? "text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </span>
                        </div>
                        <span className="text-sm text-gray-600">
                          {doctor.totalRating} Reviews
                        </span>
                      </div>

                      <div className="mt-6">
                        <div className="flex flex-wrap items-end gap-4">
                          <p className="text-2xl lg:text-4xl font-bold text-blue-500">
                            &#2547; {doctor.consultationFee}
                          </p>
                          <span className="text-xs md:text-sm font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">
                            Follow-up: &#2547; {doctor.followUpFee}
                          </span>
                        </div>
                      </div>

                      <div className="mt-6 grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">
                          <p className="font-medium">Experience</p>
                          <span>{doctor.experienceYears}+ Years</span>
                        </div>
                        <div className="text-sm text-gray-600">
                          <p className="font-medium">BMDC Number</p>
                          <span>{doctor.bmdcNum}</span>
                        </div>
                        <div className="text-sm text-gray-600">
                          <p className="font-medium">Hospital</p>
                          <span>{doctor.workingAt}</span>
                        </div>
                        <div className="text-sm text-gray-600">
                          <p className="font-medium">Patients</p>
                          <span>{doctor.patientAttended}+</span>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {doctor.details}
                        </p>
                      </div>

                      <div className="mt-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Availability
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                          <li className="bg-gray-50 p-3 rounded-lg">
                            <span className="font-medium">Days:</span>{" "}
                            {doctor.visitingDays}
                          </li>
                          <li className="bg-gray-50 p-3 rounded-lg">
                            <span className="font-medium">Hours:</span>{" "}
                            {doctor.visitingHours}
                          </li>
                        </ul>
                      </div>

                      <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-6">
                        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 shadow-lg cursor-pointer w-full sm:w-fit">
                          <VscDeviceCameraVideo className="h-5 w-5" />
                          <span>Book Video Consultation</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-center text-gray-500">
                    Loading doctor details...
                  </p>
                )}
              </div>
            </div>

            <div className="mb-14 space-y-10">
              <HeadDetails title={"Related"} colortitle={"Doctors"} />
              {relatedDoctors.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                  {relatedDoctors.map((relatedDoctor) => (
                    <DoctorCardDesign
                      productId={relatedDoctor.id}
                      image={relatedDoctor.image}
                      name={relatedDoctor.name}
                      education={relatedDoctor.education}
                      specialization={relatedDoctor.specialization}
                      rating={relatedDoctor.rating}
                      totalRating={relatedDoctor.totalRating}
                      experienceYears={relatedDoctor.experienceYears}
                      consultationFee={relatedDoctor.consultationFee}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-10">
                  No related doctors found in this specialization
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleDoctor;
