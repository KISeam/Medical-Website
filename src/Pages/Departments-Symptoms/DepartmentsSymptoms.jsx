import React, { useEffect, useState } from "react";
import HeadDetails from "../../Components/HeadDetails";
import { Link } from "react-router-dom";

const DepartmentsSymptoms = () => {
  const [doctorsCategorys, setDoctorsCategorys] = useState([]);

  useEffect(() => {
    fetch("/Doctors-Data/DoctorsCategorys.json")
      .then((res) => res.json())
      .then((data) => setDoctorsCategorys(data));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
      <div className="bg-gray-100 py-12">
        <div className="w-full md:w-11/12 lg:w-9/12 mx-auto">
          <div className="space-y-6">
            <HeadDetails
              title={"Choose a"}
              colortitle={"Department or Symptom"}
            />
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8 gap-8">
              {doctorsCategorys.map((category) => (
                <Link
                  to={`/doctors?category=${encodeURIComponent(category.name)}`}
                  key={category.id}
                  className="space-y-4 w-36"
                >
                  <div className="p-6 bg-white border hover:border-blue-500 hover:shadow-lg rounded-xl cursor-pointer">
                    <img
                      className="size-22"
                      src={category.image}
                      alt={category.name}
                    />
                  </div>
                  <p className="text-gray-800 text-sm lg:text-base font-semibold text-center truncate">
                    {category.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepartmentsSymptoms;
