import React, { useEffect, useState } from "react";
import CartDesign from "../../../Components/CartDesign";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const SomeProducts = () => {
  const [products, setProducts] = useState([]);
  const [productCategories, setProductCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState("All");

  useEffect(() => {
    fetch("/Products-Data/Products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 6)));
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
      ? products.filter((product) => product.category === selectedCategories)
      : products;

  return (
    <>
      <div>
        <div className="w-11/12 lg:w-9/12 mx-auto py-12">
          <div className="space-y-6">
            <div className="flex flex-wrap justify-center lg:justify-between items-end gap-6 text-center lg:text-left">
              <div className="w-full lg:w-[50%] 2xl:w-[60%] space-y-4">
                <h3 className="text-blue-500 text-lg md:text-xl 2xl:text-2xl font-medium">
                  Recent Products
                </h3>
                <h1 className="text-black text-2xl md:text-3xl/12 lg:text-4xl/15 2xl:text-5xl font-bold leading-tight">
                  Best Products with Expert Advice – Find Out Now!
                </h1>
              </div>
              <Link
                to="/products"
                className="flex items-center gap-4 text-lg md:text-xl font-medium text-gray-500 cursor-pointer"
              >
                View All
                <FaArrowRightLong />
              </Link>
            </div>
            <div className="flex flex-col gap-6 md:gap-10 lg:gap-12">
              <div className="flex flex-col-reverse lg:flex-row gap-6">
                <div className="w-full lg:w-1/4 lg:sticky lg:top-24 lg:self-start lg:overflow-y-auto">
                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                    <h3 className="text-lg font-semibold text-gray-800 bg-gray-50 px-6 py-4 border-b border-gray-200">
                      Categories
                    </h3>
                    <div className="flex flex-col gap-2 p-4">
                      {productCategories.map((category) => (
                        <label
                          key={category.id}
                          className="flex items-center gap-3 text-sm text-gray-700 hover:text-blue-600 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                          onClick={() => handleCheckboxChange(category.name)}
                        >
                          <input
                            type="checkbox"
                            class="checkbox checkbox-neutral checkbox-sm border-gray-300"
                            checked={selectedCategories.includes(category.name)}
                            onChange={() => handleCheckboxChange(category.name)}
                          />
                          <span>{category.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-3/4">
                  <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <CartDesign
                        key={product.id}
                        productId={product.id}
                        title={product.title}
                        image={product.image}
                        category={product.category}
                        rating={product.rating}
                        discountPrice={product.discountPrice}
                        discountPresent={product.discountPresent}
                        price={product.price}
                        productSell={product.productSell}
                        viewCart={product.viewCart}
                        review={product.review}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SomeProducts;
