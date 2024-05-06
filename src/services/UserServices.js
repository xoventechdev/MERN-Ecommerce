import SendEmail from "../utility/EmailHelper.js";
import UserModel from "../models/UserModel.js";
import TokenHelper from "../utility/TokenHelper.js";

const UserOTPRequest = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.json({
        status: "error",
        response: "Email address is required",
      });
    }

    const otpGenerate = Math.floor(100000 + Math.random() * 900000);
    const emailSubject = "Email verification code";
    const emailBody = `Your verification code is: ${otpGenerate} for login to MERN Ecommerce website`;

    const otpGenerated = await SendEmail(email, emailSubject, emailBody);

    if (!otpGenerated) {
      return res.json({
        status: "error",
        response: "Failed to send OTP. Please try again later.",
      });
    }
    await UserModel.updateOne(
      { email: email },
      { otp: otpGenerate },
      { upsert: true }
    );
    return res.json({
      status: "success",
      response: "OTP has been sent to your email address.",
    });
  } catch (error) {
    console.error("Error in OTP request:", error);
    return res.json({
      status: "error",
      response: "Something went wrong. Please try again later.",
    });
  }
};

const UserOTPVerify = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await UserModel.findOne({ email: email, otp: otp });
    if (user) {
      const token = TokenHelper.EncodeToken(email, user._id.toString);
      await UserModel.updateOne({ email: email }, { $set: { otp: "" } });
      const cookieExp = {
        expires: new Date(Date.now() + 1 * 60 * 60 * 24),
        httpOnly: false,
      };
      res.cookie("token", token, cookieExp);
      res.json({
        status: "success",
        response: "OTP verified successfully",
        token: token,
      });
    } else {
      res.json({
        status: "warning",
        response:
          "OTP verification failed. Check your OTP code and Please try again.",
      });
    }
  } catch (error) {
    res.json({ status: "error", response: error.message });
  }
};

const ProfileService = async (req, res) => {
  try {
    const user_id = req.headers.user_id;
    const user = await UserModel.findById(user_id);
    res.json({
      status: "success",
      response: user,
    });
  } catch (error) {
    res.json({ status: "error", response: error.message });
  }
};

const UpdateProfileService = async (req, res) => {
  try {
    const user_id = req.headers.user_id;
    await UserModel.findByIdAndUpdate(user_id, req.body);
    res.json({
      status: "success",
      response: "User profile updated successfully",
    });
  } catch (error) {
    res.json({ status: "error", response: error.message });
  }
};

export default {
  UserOTPRequest,
  UserOTPVerify,
  ProfileService,
  UpdateProfileService,
};
