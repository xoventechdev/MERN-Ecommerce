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

export default router;
