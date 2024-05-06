import UserServices from "../services/UserServices.js";

const UserOTP = async (req, res) => {
  return await UserServices.UserOTPRequest(req, res);
};

const VerifyOTP = async (req, res) => {
  return await UserServices.UserOTPVerify(req, res);
};

export default { UserOTP, VerifyOTP };
