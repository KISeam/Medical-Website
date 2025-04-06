import React from "react";
import { Outlet } from "react-router-dom";
import ScrollButton from "./Components/ScrollButton";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import TopHeader from "./Components/Header/TopHeader";

const Root = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <div className="bg-white">
        <Outlet />
      </div>
      <ScrollButton />
      <Footer />
    </>
  );
};

export default Root;
