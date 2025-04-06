import React, { useEffect } from "react";
import Achievements from "./Home Components/Achievements";
import Benefits from "./Home Components/Benefits";
import AvailableSpecialties from "./Home Components/AvailableSpecialties";
import BuyMedicines from "./Home Components/BuyMedicines";
import HomeDiagnosticService from "./Home Components/HomeDiagnosticService";
import PremiumMember from "./Home Components/PremiumMember";
import UserQuestions from "./Home Components/UserQuestions";
import GetInTouch from "./Home Components/GetInTouch";
import Blogs from "./Home Components/Blogs";
import Review from "./Home Components/Review";
import Hero from "./Home Components/Hero";
import SomeProducts from "./Home Components/SomeProducts";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <Hero />
        <Achievements />
        <SomeProducts />
        <Benefits />
        <AvailableSpecialties />
        <BuyMedicines />
        <HomeDiagnosticService />
        <PremiumMember />
        <Review />
        <Blogs />
        <UserQuestions />
        <GetInTouch />
      </div>
    </>
  );
};

export default Home;
