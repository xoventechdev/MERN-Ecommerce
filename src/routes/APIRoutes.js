// Importing required modules
import express from "express";
import UserController from "../controllers/UserController.js";
import ProductController from "../controllers/ProductController.js";
import UserAuthorization from "../middlewares/Authorization.js";

// Creating an Express router
const router = express.Router();

router.post("/otp_request", UserController.UserOTP);
router.post("/verify_otp", UserController.VerifyOTP);

router.post("/addBrandList", UserAuthorization, ProductController.AddBrandList);
router.get("/getBrandList", UserAuthorization, ProductController.ViewBrandList);
router.post(
  "/addCategoryList",
  UserAuthorization,
  ProductController.AddCategoryList
);
router.get(
  "/getCategoryList",
  UserAuthorization,
  ProductController.ViewCategoryList
);

export default router;
