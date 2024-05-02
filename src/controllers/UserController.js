import UserServices from "../services/UserServices.js";

exports.UserOTP = async (req, res) => {
  return await UserServices.UserOTPRequest(req, res);
};

exports.VerifyOTP = async (req, res) => {
  return await UserServices.UserOTPVerify(req, res);
};
