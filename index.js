import express from "express";
import mongoose from "mongoose";
import userRouter from "./router/userRouter.js";
import productRouter from "./router/productRouter.js";
import authorizeUser from "./lib/jwtMiddleware.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const mongoURL = process.env.MONGO_URI;

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((error) => {
    console.error("❌ Error connecting to MongoDB:", error);
  });

const app = express();
app.use(cors());

app.use(express.json());

// Mount user routes
app.use("/users", userRouter);

app.use(authorizeUser);
app.use("/products", productRouter);

app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

app.listen(3000, () => {
  console.log("🚀 Server started on port 3000");
});
