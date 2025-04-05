import React, { useEffect } from "react";
import DoctorCardDesign from "../../../Components/DoctorCardDesign";

const RightDoctorsDetalis = ({ filteredDoctors }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
        {filteredDoctors.map((doctor) => (
          <DoctorCardDesign
            productId={doctor.id}
            image={doctor.image}
            name={doctor.name}
            education={doctor.education}
            specialization={doctor.specialization}
            rating={doctor.rating}
            totalRating={doctor.totalRating}
            experienceYears={doctor.experienceYears}
            consultationFee={doctor.consultationFee}
          />
        ))}
      </div>
    </div>
  );
};

export default RightDoctorsDetalis;
