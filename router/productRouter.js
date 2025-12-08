import express from "express";
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from "../controllers/productController.js";

const productRouter = express.Router();
productRouter.post("/",createProduct);
productRouter.get("/",getProducts);
productRouter.delete("/:productId",deleteProduct);  //wenas wena value ek delete krnnonnm : dannon
productRouter.put("/:productId" , updateProduct);
productRouter.get("/:productId", getProductById)
export default productRouter;