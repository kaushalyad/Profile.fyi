import React, { useState, useEffect } from "react";
import Product from "./Product";
import axios from "axios";
const ProductList = () => {
  const [productData, setProductData] = useState([]);
  const [fetchedData, setFeatchedData] = useState(false);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          "https://profile-fyi.onrender.com/products"
        );
        // console.log(res.data);
        setProductData(res.data);
        setFeatchedData(true);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);
  // console.log(productData[0].products);
  return (
    <div className="flex flex-col gap-5 p-5 bg-white">
      <div className=" text-2xl font-semibold text-black">Best Deals Available Today</div>
      <div className="flex justify-center items-center flex-wrap  gap-14 w-[98%]">
        {fetchedData &&
          productData[0].products.map((product) => (
            <div key={product.id} className="flex justify-center items-center">
              <Product product={product} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
