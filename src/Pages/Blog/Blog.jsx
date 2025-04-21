import React, { useEffect, useState } from "react";
import LeftBlog from "./Blog Components/LeftBlog";
import BlogDetails from "./Blog Components/BlogDetails";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);
  const [blogCategories, setBlogCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState("All");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const blogsPerPage = 10;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch("/Blog-Data/Blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setAllBlogs(data);
        setBlogs(data.slice(0, blogsPerPage));
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("/Blog-Data/BlogCategory.json")
      .then((res) => res.json())
      .then((data) => setBlogCategories(data));
  }, []);

  const handleCheckboxChange = (categoryName) => {
    setSelectedCategories(categoryName);
  };

  const filteredBlogs =
    selectedCategories && selectedCategories !== "All"
      ? allBlogs.filter((blog) => blog.category === selectedCategories)
      : blogs;

  const loadMoreBlogs = () => {
    setLoading(true);
    setTimeout(() => {
      const nextPage = page + 1;
      const nextBlogs = allBlogs.slice(0, nextPage * blogsPerPage);
      setBlogs(nextBlogs);
      setPage(nextPage);
      setLoading(false);
    }, 500);
  };

  return (
    <>
      <div className="py-12">
        <div className="w-full md:w-11/12 lg:w-9/12 mx-auto">
          <div className="flex flex-col gap-6 md:gap-10 lg:gap-12">
            {loading && page === 1 ? (
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
                  <LeftBlog
                    blogCategories={blogCategories}
                    selectedCategories={selectedCategories}
                    handleCheckboxChange={handleCheckboxChange}
                  />
                </div>
                <div className="w-full lg:w-3/4">
                  <BlogDetails filteredBlogs={filteredBlogs} />
                  {selectedCategories === "All" &&
                    allBlogs.length > blogs.length && (
                      <div className="flex justify-center my-6">
                        <button
                          onClick={loadMoreBlogs}
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

export default Blog;
