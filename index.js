import express from "express";
import mongoose from "mongoose";
import userRouter from "./router/userRouter.js";
import productRouter from "./router/productRouter.js";
import authorizeUser from "./lib/jwtMiddleware.js";

const mongoURL =
  "mongodb+srv://Dehami123:Divya%402003@cluster0.yevsenv.mongodb.net/?appName=Cluster0";

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((error) => {
    console.error("❌ Error connecting to MongoDB:", error);
  });

const app = express();

app.use(express.json());

app.use(authorizeUser)



// Mount user routes
app.use("/users", userRouter);
app.use("/products", productRouter);

app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

app.listen(3000, () => {
  console.log("🚀 Server started on port 3000");
});
