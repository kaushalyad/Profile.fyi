import mongoose from "mongoose";
const productSchema = mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  stock: Number,
  brand: String,
  category: String,
  thumbnail: String,
  images: Object,
  deleted: Boolean,
  
});

const product = mongoose.model("products", productSchema);

export default product;
