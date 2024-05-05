// Importing required modules
import express from 'express';
import UserController from "../controllers/UserController.js";

// Creating an Express router
const router = express.Router();

// Route to handle OTP request
router.post("/otp_request", UserController.UserOTP);

// Route to handle GET request for checking status
router.get("/ok", (req, res) => {
    res.json({ status: 200, response: "OK" });
});

// Exporting the router as the default export
export default router;
