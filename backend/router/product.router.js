import express from "express";
import  {getProduct}   from "../controller/product.controller.js";
const routes = express.Router();

routes.get("/", getProduct);

export default routes;
