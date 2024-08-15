import React, { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import CartPage from "../pages/CartPage.jsx";
import Navbar from "../components/Navbar.jsx";
import NotFound from "../pages/NotFound.jsx";
export const UpdatedContext = createContext();
const Router = () => {
  const [updated, setUpdated] = useState(false);
  useEffect(() => {
    console.log(updated);
  }, [updated]);
  return (
    <UpdatedContext.Provider value={{ updated, setUpdated }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </UpdatedContext.Provider>
  );
};

export default Router;
