import React, { useState, useEffect } from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: "/Images/1.jpg",
    },
    {
      id: 2,
      image: "/Images/2.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <div className="w-full md:w-10/11 lg:w-9/12 mx-auto">
        <div className="relative w-full pb-6">
          <div className="flex transition-transform duration-700 ease-in-out rounded-2xl overflow-hidden">
            <AnimatePresence initial={false} custom={currentSlide}>
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8 }}
                className="w-full flex-shrink-0 relative"
              >
                <div className="h-[250px] sm:h-full overflow-hidden">
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute bottom-3 left-1/2 bg-white rounded-full p-2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  index === currentSlide ? "bg-blue-500" : "bg-blue-300"
                } transition duration-300`}
                onClick={() => setCurrentSlide(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
