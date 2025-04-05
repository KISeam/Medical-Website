import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const AddToCarts = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Digital Thermometer Pro",
      image: "https://m.media-amazon.com/images/I/61KTbB-RTeL._SL1500_.jpg",
      subtitle: "Fast and Accurate Reading",
      price: 25.99,
      discountPrice: 19.99,
      category: "Digital Thermometer",
      quantity: 1,
    },
    {
      id: 2,
      title: "Premium Blood Pressure Monitor",
      image: "https://m.media-amazon.com/images/I/71TL6nN4LKL._AC_SL1500_.jpg",
      subtitle: "Clinically Validated Accuracy",
      price: 49.99,
      discountPrice: 39.99,
      category: "Blood Pressure Monitor",
      quantity: 2,
    },
    {
      id: 3,
      title: "Pulse Oximeter Elite",
      image: "https://m.media-amazon.com/images/I/813XeEjRv8L.jpg",
      subtitle: "Instant SpO2 and Pulse Rate",
      price: 29.99,
      discountPrice: 24.99,
      category: "Pulse Oximeter",
      quantity: 1,
    },
  ]);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + (item.discountPrice || item.price) * item.quantity;
  }, 0);

  const handleIncrease = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="container mx-auto pt-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 md:gap-10 lg:gap-12">
        <div className="flex flex-col gap-6 md:gap-10 lg:gap-12">
          <div className="mb-10">
            <div className="w-full max-w-5xl mx-auto space-y-6 text-gray-600">
              {cartItems.map((item) => (
                <div key={item.id} className="border-b border-gray-200 pb-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox checkbox-primary hidden sm:block"
                      />
                      <img
                        className="size-16 sm:size-20 object-cover rounded-md"
                        src={item.image}
                        alt={item.title}
                      />
                      <div className="flex-1 sm:flex-none">
                        <div className="font-medium text-sm sm:text-base">
                          {item.title}
                        </div>
                        <div className="text-xs uppercase font-semibold opacity-60">
                          {item.category}
                        </div>
                        <div className="text-xs sm:text-sm opacity-75 mt-1">
                          {item.subtitle}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between w-full sm:w-auto sm:gap-4">
                      <div className="flex items-center gap-2">
                        <button
                          className="text-sm bg-gray-200 px-2 py-1 rounded-md cursor-pointer hover:bg-gray-300"
                          onClick={() => handleDecrease(item.id)}
                        >
                          -
                        </button>
                        <span className="min-w-[20px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          className="text-sm bg-gray-200 px-2 py-1 rounded-md cursor-pointer hover:bg-gray-300"
                          onClick={() => handleIncrease(item.id)}
                        >
                          +
                        </button>
                      </div>
                      <div className="font-medium text-right sm:w-24">
                        $
                        {(
                          (item.discountPrice || item.price) * item.quantity
                        ).toFixed(2)}
                        {item.discountPrice && (
                          <div className="text-xs line-through text-gray-500">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                        )}
                      </div>
                      <button
                        className="text-red-500 hover:text-red-700 cursor-pointer ml-2 sm:ml-0"
                        onClick={() => handleRemove(item.id)}
                      >
                        <RiDeleteBin6Line size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <div className="font-medium text-base sm:text-lg">
                    Total (
                    {cartItems.reduce((acc, item) => acc + item.quantity, 0)}{" "}
                    items)
                  </div>
                  <div className="font-bold text-lg sm:text-xl">
                    ${totalPrice.toFixed(2)}
                  </div>
                </div>
                <button className="mt-4 w-full bg-[#63B295] hover:bg-[#518e79] text-white py-2 rounded-md  transition-colors cursor-pointer">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCarts;
