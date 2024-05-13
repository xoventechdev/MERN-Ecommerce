// Importing required modules
import express from "express";
import UserController from "../controllers/UserController.js";
import ProductController from "../controllers/ProductController.js";
import UserAuthorization from "../middlewares/Authorization.js";

// Creating an Express router
const router = express.Router();

router.post("/otp_request", UserController.UserOTP);
router.post("/verify_otp", UserController.VerifyOTP);

router.post("/addBrandList", ProductController.AddBrandList);
router.get("/getBrandList", ProductController.ViewBrandList);
router.post("/addCategoryList", ProductController.AddCategoryList);
router.get("/getCategoryList", ProductController.ViewCategoryList);

router.post("/addProduct", ProductController.AddProduct);
router.get("/getProductList", ProductController.ViewProductList);
router.get("/productForEdit/:id", ProductController.ViewProductForEdit);
router.delete("/productDelete/:id", ProductController.DeleteProduct);

export default router;
