import React from "react";

const BlogCart = ({ key, image, title, subtitle, date }) => {
  
  return (
    <>
      <div key={key} className="bg-white p-6 border border-gray-300 rounded-lg">
        <div className="space-y-4">
          <div className="h-52 w-80 overflow-hidden rounded-lg">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt={title}
            />
          </div>
          <h2 className="font-semibold line-clamp-2 text-black md:text-lg">{title}</h2>
          <div className="flex justify-between items-center text-gray-700">
            <div className="flex items-center gap-2 md:gap-4">
              <img
                className="size-6 rounded-full"
                src="/Images/icon.png"
                alt=""
              />
              <h5 className="text-base">DocTime</h5>
            </div>
            <span className="text-base">{date}</span>
          </div>
          <p className="line-clamp-2 text-gray-500 text-sm">{subtitle}</p>
        </div>
      </div>
    </>
  );
};

export default BlogCart;
