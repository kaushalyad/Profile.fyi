import mongoose from "mongoose";
const productSchema = mongoose.Schema({
  id: String,
  title: String,
  rating: Number,
  name: String,
  price: Number,
  image: String,
  description: String,
  category: String,
  tumbnail: String,
  quantity: Number,
  images: Object,
  deleted: Boolean,
});

const product = mongoose.model("products", productSchema);

export default product;
