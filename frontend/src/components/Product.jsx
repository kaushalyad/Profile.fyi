import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UpdatedContext } from "../router/Router";

const Product = ({ product }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const { updated, setUpdated } = useContext(UpdatedContext);
  const navigate = useNavigate(); // For programmatic navigation

  const addProduct = (product) => {
    const existingProducts = JSON.parse(localStorage.getItem("products")) || [];
    const isProductInCart = existingProducts.find((p) => p.id === product.id);

    if (isProductInCart) {
      toast.error("Product already in the cart!", {
        position: "top-center",
      });
    } else {
      existingProducts.push(product);
      localStorage.setItem("products", JSON.stringify(existingProducts));
      setCartProducts(existingProducts);

      toast.success("Product added to the cart!", {
        position: "top-center",
      });

      // Toggle the updated state if needed
      setUpdated(prev => !prev);
    }
  };

  useEffect(() => {
    const existingProducts = JSON.parse(localStorage.getItem("products")) || [];
    setCartProducts(existingProducts);
  }, []);

  const handleBuyNow = () => {
    addProduct(product);
    navigate("/cart"); // Navigate to the cart page
  };

  return (
    <div className="card card-compact bg-base-100 max-w-96 min-w-96 shadow-xl">
      <figure>
        <img src={`${product.thumbnail}`} alt={product.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>{product.description}</p>
        <div>
          {product.stock > 0 ? (
            <span className="text-green-600 text-sm font-semibold">
              In Stock
            </span>
          ) : (
            <span className="text-red-600 text-sm font-semibold">
              Out of Stock
            </span>
          )}
        </div>
        <div>
          <div className="flex items-center">
            <div className="text-yellow-500 text-2xl">
              {"★".repeat(product.rating)}
              {"☆".repeat(5 - product.rating)}
            </div>
            <span className="ml-2 text-gray-700 text-sm">
              {product.rating > 0 ? <p>(2,835 reviews)</p> : <p>(0 reviews)</p>}
            </span>
          </div>
          <div className="text-sm text-gray-500">
            900+ bought in the past month
          </div>
          <div className="text-xl font-semibold text-gray-900">
            &#36;
            {Math.floor(
              product.price - (product.price * product.discountPercentage) / 100
            )}
          </div>
          <div className="text-sm text-gray-500 line-through">
            M.R.P: &#36;{product.price}
          </div>
          <div className="text-sm text-green-600">
            {`${product.discountPercentage}% off`}
          </div>
        </div>
        <div className="card-actions justify-between">
          <button
            onClick={() => addProduct(product)}
            className="btn btn-primary px-10"
          >
            Add To Cart
          </button>
          {/* ToastContainer moved to a higher-level component */}
          <NavLink to="/cart" className="btn btn-primary bg-red-500 px-10 border-0 hover:bg-red-600">
            <button onClick={handleBuyNow} className="w-full">
              Buy Now
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Product;
