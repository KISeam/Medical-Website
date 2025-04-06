import React, { memo } from "react";
import CartDesign from "../../../../Components/CartDesign";

const RightProductsDetalis = ({ filteredProducts }) => {
  return (
    <div>
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
  );
};

export default memo(RightProductsDetalis);
