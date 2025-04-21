import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import BlogCart from "../../../Components/BlogCart";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/Blog-Data/Blogs.json")
      .then((response) => response.json())
      .then((data) => {
        const limitedBlogs = data.slice(0, 5);
        setBlogs(limitedBlogs);
      });
  }, []);

  return (
    <>
      <div className="py-12 border-b border-gray-300">
        <div className="w-full md:w-11/12 lg:w-9/12 mx-auto">
          <div className="space-y-6">
            <div className="flex flex-wrap justify-center lg:justify-between items-end gap-6 text-center lg:text-left">
              <div className="w-full lg:w-[50%] 2xl:w-[60%] space-y-4">
                <h3 className="text-blue-500 text-lg md:text-xl 2xl:text-2xl font-medium">
                  Recent Blogs
                </h3>
                <h1 className="text-black text-2xl md:text-3xl/12 lg:text-4xl/15 2xl:text-5xl font-bold leading-tight">
                  Read our latest blogs from Health Experts
                </h1>
              </div>
              <Link
                to="/blog"
                className="flex items-center gap-4 text-lg md:text-xl font-medium text-gray-500 cursor-pointer"
              >
                View All
                <FaArrowRightLong />
              </Link>
            </div>
            <div className="scroll-container flex gap-4 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100">
              {blogs.map((blog) => (
                <BlogCart
                  key={blog.id}
                  image={blog.image}
                  title={blog.title}
                  subtitle={blog.subtitle}
                  date={blog.date}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
