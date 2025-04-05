import React from "react";
import { Link } from "react-router-dom";

const BlogDetails = ({ filteredBlogs }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
      {filteredBlogs.map((blog) => (
        <div
          key={blog.id}
          className="border border-gray-300 rounded-lg shadow-md overflow-hidden bg-white"
        >
          <Link to={`/blog/${blog.id}`}>
            <div className="relative w-full h-48">
              <img
                className="w-full h-full object-cover"
                src={blog.image}
                alt={blog.title}
              />
            </div>
            <div className="p-4 flex flex-col items-start gap-2">
              <span className="text-sm text-gray-500">
                {blog.date} - {blog.category}
              </span>
              <h2 className="text-lg font-semibold text-gray-900">
                {blog.title}
              </h2>
              <p className="text-gray-600 text-sm">{blog.subtitle}</p>
              <button className="text-blue-500 hover:underline text-sm font-medium cursor-pointer">
                Read More »
              </button>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;
