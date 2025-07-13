import React, { useEffect, useState } from "react";
import type { IProducts } from "../../types";
import api from "../../api";

const Home = () => {
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

  return (
    <div className="container">
      <h2 className="text-[30px] text-center font-semibold mb-5">Products</h2>
      {loading && <p className="text-center">Yuklanmoqda...</p>}
      {error && <p className="text-red-600 text-center">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {products?.map((product) => (
          <div
            key={product?.id}
            className="border border-gray-300 rounded-[5px] p-2"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Home);
