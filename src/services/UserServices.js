import SendEmail from "../utility/EmailHelper";
import UserModel from "../models/UserModel";

exports.UserOTPRequest = async (req, res) => {
  try {
    const { email } = req.body;
    const otpGenerate = Math.floor(100000 + Math.random() * 900000);
    const emailSubject = "Email verification code";
    const emailBody = `Your verification code is: ${otpGenerate} of ${email} for login to MERN Ecommerce website`;
    await SendEmail(email, emailSubject, emailBody);
    await UserModel.create({ email: email, otp: otpGenerate });
    res.json({
      status: "success",
      response: "OTP has been send to your email address",
    });
  } catch (error) {
    res.json({ status: "error", response: error.message });
  }
};

exports.UserOTPVerify = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await UserModel.findOne({ email: email, otp: otp });
    if (user) {
      const token = EncodeToken(email, user._id.toString);
      await UserModel.updateOne({ email: email }, { $set: { otp: "" } });
      res.json({
        status: "success",
        response: "OTP verified successfully",
        token: token,
      });
    } else {
      res.json({
        status: "warning",
        response: "OTP verification failed. Please try again.",
      });
    }
  } catch (error) {
    res.json({ status: "error", response: error.message });
  }
};

exports.ProfileService = async (req, res) => {
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

exports.UpdateProfileService = async (req, res) => {
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
