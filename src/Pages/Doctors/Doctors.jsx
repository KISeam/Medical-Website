import React, { useEffect, useState } from "react";
import LeftCategory from "./Doctors Components/LeftCategory";
import RightDoctorsDetalis from "./Doctors Components/RightDoctorsDetalis";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [allDoctors, setAllDoctors] = useState([]);
  const [doctorCategories, setDoctorCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState("All");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const doctorsPerPage = 10;
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const searchParam = searchParams.get("search");

    if (categoryParam) {
      setSelectedCategories(decodeURIComponent(categoryParam));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (searchParam) {
      setSearchQuery(decodeURIComponent(searchParam));
    }
  }, []);

  useEffect(() => {
    fetch("/Doctors-Data/Doctors.json")
      .then((res) => res.json())
      .then((data) => {
        setAllDoctors(data);
        setDoctors(data.slice(0, doctorsPerPage));
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("/Doctors-Data/DoctorsCategorys.json")
      .then((res) => res.json())
      .then((data) => setDoctorCategories(data));
  }, []);

  const handleCheckboxChange = (categoryName) => {
    setSelectedCategories(categoryName);
    const params = new URLSearchParams(searchParams);
    if (categoryName === "All") {
      params.delete("category");
    } else {
      params.set("category", encodeURIComponent(categoryName));
    }
    setSearchParams(params);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const params = new URLSearchParams(searchParams);
    if (query.trim() === "") {
      params.delete("search");
    } else {
      params.set("search", encodeURIComponent(query));
    }
    setSearchParams(params);
  };

  const filteredDoctors = allDoctors.filter((doctor) => {
    const categoryMatch =
      selectedCategories === "All" || doctor.category === selectedCategories;

    const searchMatch =
      searchQuery === "" ||
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (doctor.specialization &&
        doctor.specialization
          .toLowerCase()
          .includes(searchQuery.toLowerCase()));

    return categoryMatch && searchMatch;
  });

  const displayedDoctors =
    selectedCategories === "All" && searchQuery === ""
      ? doctors
      : filteredDoctors;

  const loadMoreDoctors = () => {
    setLoading(true);
    setTimeout(() => {
      const nextPage = currentPage + 1;
      const nextDoctors = allDoctors.slice(0, nextPage * doctorsPerPage);
      setDoctors(nextDoctors);
      setCurrentPage(nextPage);
      setLoading(false);
    }, 500);
  };

  return (
    <>
      <div>
        <div className="w-11/12 md:w-10/11 lg:w-9/12 mx-auto py-12">
          <div className="flex flex-col gap-6 md:gap-10 lg:gap-12">
            {loading && currentPage === 1 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                {[...Array(10)].map((_, index) => (
                  <div key={index} className="flex w-52 flex-col gap-4">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col-reverse lg:flex-row gap-6">
                <div className="w-full lg:w-1/4">
                  <LeftCategory
                    doctorCategories={doctorCategories}
                    selectedCategories={selectedCategories}
                    handleCheckboxChange={handleCheckboxChange}
                    searchQuery={searchQuery}
                    onSearch={handleSearch}
                  />
                </div>
                <div className="w-full lg:w-3/4">
                  <RightDoctorsDetalis
                    navigate={navigate}
                    filteredDoctors={displayedDoctors}
                  />
                  {selectedCategories === "All" &&
                    searchQuery === "" &&
                    allDoctors.length > doctors.length && (
                      <div className="flex justify-center my-6">
                        <button
                          onClick={loadMoreDoctors}
                          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 cursor-pointer"
                        >
                          {loading ? "Loading..." : "Load More"}
                        </button>
                      </div>
                    )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctors;
