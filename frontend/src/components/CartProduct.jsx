import React, { useContext } from "react";
import { toast } from "react-toastify";
import { UpdatedContext } from "../router/Router";
const CartProduct = ({ product }) => {
  const { updated, setUpdated } = useContext(UpdatedContext);
  const removeProduct = (product) => () => {
    // Remove product from cart
    let existingProducts = JSON.parse(localStorage.getItem("products"));
    existingProducts = existingProducts.filter((p) => p.id !== product.id);
    localStorage.setItem("products", JSON.stringify(existingProducts));
    updated ? setUpdated(false) : setUpdated(true);
    // console.log("Product removed from cart:", product);
    toast.success("Product removed successfully!", {
      position: "top-center",
    });
  };
  return (
    <div className="card lg:card-side bg-base-50 shadow-xl flex items-center justify-start gap-10 p-5">
      <div className="card lg:card-side bg-base-50   max-w-20">
        <figure>
          <img src={`${product.thumbnail}`} alt="Album" />
        </figure>
      </div>
      <div className="flex justify-between w-[100%]">
        <div className=" flex flex-col">
          <div>
            <p className=" text-sm  md:text-lg font-semibold">
              {product.description}
            </p>
          </div>
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
          <div className="flex flex-row mt-4">
            <div className="text-green-700 py-0 border-gray-900 border-r-2 pr-2 ">
              <p className=" cursor-pointer">
                <button
                  className="text-[10px] md:text-lg"
                  onClick={removeProduct(product)}
                >
                  Delete
                </button>
              </p>
            </div>
            <div className="text-green-700 border-gray-900 border-r-2 px-2 py-0">
              <p className="cursor-pointer">
                <button className="text-[10px] md:text-lg">
                  Save for later
                </button>
              </p>
            </div>
            <div className="text-green-700 border-gray-900 border-r-2 px-2 text-center">
              <p className=" cursor-pointer ">
                <button className="text-[10px] md:text-lg">
                  See more like this
                </button>
              </p>
            </div>
            <div className="text-green-700 border-gray-900  px-2 text-center">
              <p className="cursor-pointer ">
                <button className="text-[10px] md:text-lg">Share</button>
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="font-bold">
            &#36;
            {Math.floor(
              product.price - (product.price * product.discountPercentage) / 100
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
