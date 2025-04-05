import React, { useEffect, useState } from "react";
import RightProductsDetalis from "./Products Componemts/Right Section/RightProductsDetalis";
import LeftCategory from "./Products Componemts/Left Section/LeftCategory";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [productCategories, setProductCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState("All");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch("/Products-Data/Products.json")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setProducts(data.slice(0, productsPerPage));
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("/Products-Data/ProductCategory.json")
      .then((res) => res.json())
      .then((data) => setProductCategories(data));
  }, []);

  const handleCheckboxChange = (categoryName) => {
    setSelectedCategories(categoryName);
  };

  const filteredProducts =
    selectedCategories && selectedCategories !== "All"
      ? allProducts.filter(
          (product) =>
            product.category === selectedCategories &&
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : allProducts
          .filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .slice(0, currentPage * productsPerPage);

  const loadMoreProducts = () => {
    setLoading(true);
    setTimeout(() => {
      const nextPage = currentPage + 1;
      const nextProducts = allProducts.slice(0, nextPage * productsPerPage);
      setProducts(nextProducts);
      setCurrentPage(nextPage);
      setLoading(false);
    }, 500);
  };

  return (
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
                productCategories={productCategories}
                selectedCategories={selectedCategories}
                handleCheckboxChange={handleCheckboxChange}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            </div>
            <div className="w-full lg:w-3/4">
              <RightProductsDetalis filteredProducts={filteredProducts} />
              {selectedCategories === "All" &&
                allProducts.length > products.length && (
                  <div className="flex justify-center my-6">
                    <button
                      onClick={loadMoreProducts}
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
  );
};

export default Products;
