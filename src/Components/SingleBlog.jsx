import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch("/Blog-Data/Blogs.json")
      .then((res) => res.json())
      .then((data) => {
        const foundBlog = data.find((blog) => blog.id == id);
        setBlog(foundBlog);
      });
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }
  return (
    <>
      <div>
        <div className="bg-white py-10">
          <div className="w-11/12 md:w-8/11 lg:w-7/12 2xl:w-6/12 mx-auto">
            <div className="space-y-6">
              <div className="bg-blue-50 py-2 px-4 md:px-6 text-blue-600 w-fit rounded-4xl">
                <p className="text-sm md:text-base">{blog.category}</p>
              </div>
              <h1 className="font-bold text-black text-xl md:text-3xl">
                {blog.title}
              </h1>
              <p className="text-gray-400 text-xs md:text-sm">{blog.date}</p>
              <p className="text-gray-600 text-xs md:text-sm">
                {blog.subtitle}
              </p>
              <img src={blog.image} alt={blog.title} />
              <p className="text-gray-600 text-xs md:text-sm">
                {blog.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
