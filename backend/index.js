import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./router/product.router.js";
import path from "path";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001;
const mongoDBURI = process.env.mongoDBURI;

// connect to MongoDB server

try {
  await mongoose.connect(mongoDBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error: ", error);
}

app.use(cors({
  origin: ["https://profile-fyi-phi.vercel.app/"],
  methods: ["GET", "POST"],
  credentials: true, // enable cookies
}));

// use routes
app.use("/products", routes);
app.listen(PORT, () => {
  console.log(`profile.fyi app listening on port ${PORT}`);
});
