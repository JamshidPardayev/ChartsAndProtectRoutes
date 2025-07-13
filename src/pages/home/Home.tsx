import React, { useEffect, useState } from "react";
import type { IProducts } from "../../types";
import api from "../../api";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { useStore } from "../../zustand/store";
const Skeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
    {Array.from({ length: 8 }).map((_, i) => (
      <div
        key={i}
        className="border p-2 border-gray-300 w-full bg-gray-100 rounded-[5px]"
      >
        <div className="h-[280px] bg-gray-300 animate-pulse rounded" />
        <div className="h-8 bg-gray-300 mt-2 animate-pulse rounded" />
        <div className="h-6 bg-gray-300 mt-1 w-4/12 animate-pulse rounded" />
      </div>
    ))}
  </div>
);

const Home = () => {
  const { isInWishlist, toggleWishlist, loadFromStorage } = useStore();
  const [products, setProducts] = useState<IProducts[]>([]);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    api
      .get("/products")
      .then((res) => {
        setProducts(res.data.products);
        console.log(res.data);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);
  useEffect(() => {
    loadFromStorage();
  }, []);
  return (
    <div className="container">
      <h2 className="text-[30px] text-center font-semibold mb-5">Products</h2>
      {loading && <Skeleton />}
      {error && <p className="text-red-600 text-center">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {products?.map((product) => (
          <div
            key={product?.id}
            className="relative group border border-gray-300 rounded-[5px] p-2"
          >
            <div className="max-w-[350px] mx-auto h-[280px] overflow-hidden">
              <img
                src={product?.thumbnail}
                alt="productImg"
                className="w-full h-full hover:scale-105 duration-300"
              />
            </div>
            <h2 className="text-[20px] font-semibold line-clamp-1 mb-1 max-sm:text-center">
              {product?.title}
            </h2>
            <strong className="text-green-700 max-sm:flex max-sm:justify-center">
              {product?.price}$
            </strong>
            <div
              onClick={() => toggleWishlist(product)}
              className="absolute top-2 right-2 h-[40px] w-[40px] bg-gray-300 text-[18px] rounded-[50%] text-center content-center text-red-500 hover:text-red-700 cursor-pointer duration-300 hidden group-hover:block"
            >
              {isInWishlist(product?.id) ? <HeartFilled /> : <HeartOutlined />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Home);
