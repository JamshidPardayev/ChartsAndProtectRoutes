import React, { useEffect } from "react";
import { useStore } from "../../zustand/store";
import { HeartFilled } from "@ant-design/icons";


const Wishlist = () => {
  const { wishlist, toggleWishlist, loadFromStorage } = useStore();
  useEffect(() => {
    loadFromStorage();
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-[30px] font-semibold text-center mb-5">Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-600">No items in wishlist.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="border border-gray-300 p-3 rounded relative group"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-[250px] object-cover rounded mb-2"
              />
              <h2 className="text-lg font-semibold line-clamp-1">
                {product.title}
              </h2>
              <p className="text-green-600 font-medium">{product.price}$</p>
              <button
                onClick={() => toggleWishlist(product)}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800 text-[18px] h-[40px] w-[40px] bg-gray-300 duration-300 cursor-pointer rounded-[50%] text-center content-center"
              >
                <HeartFilled />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default React.memo(Wishlist);
