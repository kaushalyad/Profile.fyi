import React, { useState, useEffect, useMemo, useContext } from "react";
import CartProduct from "../components/CartProduct";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UpdatedContext } from "../router/Router";
const CartPage = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const { updated, setUpdated } = useContext(UpdatedContext);

  useEffect(() => {
    // Find products in localStorage
    const existingProducts = JSON.parse(localStorage.getItem("products")) || [];
    setCartProducts(existingProducts);
  }, [updated]); // Empty dependency array to run only once on mount

  const subTotal = useMemo(() => {
    let sum = 0;
    cartProducts.forEach((product) => {
      sum += Math.floor(
        product.price - (product.price * product.discountPercentage) / 100
      );
    });
    return sum;
  }, [cartProducts]); // Recalculate subtotal when cartProducts changes

  const buyOrNot = () => {
    updated ? setUpdated(false) : setUpdated(true);
    if (cartProducts.length === 0) {
      toast.error("No items in the cart", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    toast.success("Purchase successful", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    localStorage.setItem("products", JSON.stringify([]));
    setCartProducts([]);
  };

  return (
    <div className="px-6 lg:px-16 py-6">
      <div>
        <p className="text-4xl font-semibold">Shopping Cart</p>
        <div className="mt-2 flex justify-between">
          <div>
            <span className="font-semibold">
              {cartProducts.length === 0
                ? "No items selected."
                : `${cartProducts.length} items selected.`}
            </span>
            <span className="underline text-green-400 p-2 font-semibold">
              Select all items
            </span>
          </div>
          <div>
            <p className="font-semibold">Price</p>
          </div>
        </div>
      </div>
      <hr className="mt-2" />
      <div className="grid grid-cols-1 gap-7">
        {cartProducts.map((product) => (
          <CartProduct
            key={product.id}
            product={product}
            updated={updated}
            setUpdated={setUpdated}
          />
        ))}
      </div>
      <hr />
      <div className="flex justify-end mt-3">
        <p className="font-semibold text-xl">
          Subtotal ({cartProducts.length} items): {subTotal}
        </p>
      </div>
      <div className="flex justify-end mt-2">
        <button
          className="btn bg-yellow-500 text-white hover:bg-yellow-600 px-20 rounded-3xl text-xl"
          onClick={buyOrNot}
        >
          Proceed To Buy
        </button>
      </div>
    </div>
  );
};

export default CartPage;
