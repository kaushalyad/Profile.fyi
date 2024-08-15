import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  // fetch the total products count from local storage
  useEffect(() => {
    const totalCount = JSON.parse(localStorage.getItem("products")) || [];
    
    let sum = 0;
    totalCount.map((product) => {
      sum +=
        Math.floor(
          product.price - (product.price * product.discountPercentage) / 100
        ) * 1;
      setSubTotal(sum);
    });
    setTotalProducts(totalCount.length);
  });
  // console.log(totalProducts);
  return (
    <div className="navbar bg-[#047BD5]">
      <div className="flex-1">
        <NavLink to="/" className="btn btn-ghost text-white text-2xl">
          Apnakart
        </NavLink>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end text-white font-bold">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {totalProducts > 0 ? (
                <span className="badge badge-sm indicator-item text-red-600">
                  {totalProducts}
                </span>
              ) : (
                <span></span>
              )}
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body bg-teal-200">
              <span className="text-lg font-bold text-green-500">
                {totalProducts} Items
              </span>
              <span className="text-info">Subtotal: ${subTotal}</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">
                  <NavLink to="/cart">View cart</NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end text-white font-bold">
          <p className=" mr-[15px]">Cart</p>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
