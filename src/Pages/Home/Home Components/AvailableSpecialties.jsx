import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AvailableSpecialties = () => {
  const [doctorsCategorys, setDoctorsCategorys] = useState([]);

  useEffect(() => {
    fetch("/Doctors-Data/DoctorsCategorys.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredCategories = data
          .filter((category) => category.name !== "All")
          .slice(0, 6);
        setDoctorsCategorys(filteredCategories);
      });
  }, []);

  return (
    <>
      <div className="bg-gray-100">
        <div className="py-12">
          <div className="w-11/12 md:w-10/11 lg:w-9/12 mx-auto">
            <div className="flex flex-col gap-6">
              <div className="space-y-3 text-center lg:text-left">
                <h3 className="text-blue-500 text-xl md:text-2xl font-medium">
                  Available specialties
                </h3>
                <h1 className="text-black text-2xl md:text-3xl/12 lg:text-4xl/15 font-bold">
                  Explore Doctors from 36+ clinical areas
                </h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {doctorsCategorys.map((doctorCategory) => (
                  <Link
                    to={`/doctors?category=${encodeURIComponent(
                      doctorCategory.name
                    )}`}
                    key={doctorCategory.id}
                    className="flex flex-col items-center space-y-4 p-6 bg-white border hover:border-blue-500 rounded-xl cursor-pointer"
                  >
                    <img
                      className="size-20"
                      src={doctorCategory.image}
                      alt={doctorCategory.name}
                    />
                    <div className="space-y-2.5 text-center">
                      <h2 className="text-gray-800 text-xl font-semibold">
                        {doctorCategory.name}
                      </h2>
                      <p className="text-gray-500 text-base line-clamp-2">
                        {doctorCategory.subtitle}
                      </p>
                    </div>
                  </Link>
                ))}
                <Link
                  to="/products"
                  className="flex flex-col items-center space-y-4 p-6 bg-white border hover:border-blue-500 rounded-xl cursor-pointer"
                >
                  <img
                    className="size-20"
                    src="https://cdn-icons-png.flaticon.com/128/2968/2968933.png"
                    alt="Internal Medicine"
                  />
                  <div className="space-y-2.5 text-center">
                    <h2 className="text-gray-800 text-xl font-semibold">
                      Internal Medicine
                    </h2>
                    <p className="text-gray-500 text-base line-clamp-2">
                      Prevent, Diagnose, Treat: Comprehensive Adult Healthcare.
                    </p>
                  </div>
                </Link>
                <Link
                  to="/departments_symptoms"
                  className="flex flex-col items-center space-y-4 p-6 bg-white border hover:border-blue-500 rounded-xl cursor-pointer"
                >
                  <img
                    className="size-20"
                    src="https://cdn-icons-png.flaticon.com/128/16159/16159361.png"
                    alt="More specialties"
                  />
                  <div className="space-y-2.5 text-center">
                    <h2 className="text-gray-800 text-xl font-semibold">
                      More
                    </h2>
                    <p className="text-gray-500 text-base line-clamp-2">
                      Explore many more...
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AvailableSpecialties;
