import JWT from "jsonwebtoken";
import TokenHelper from "../utility/TokenHelper.js";

const UserAuthorization = (req, res, next) => {
  try {
    const token = req.headers["token"];
    if (token == null) {
      return res.json({ status: "error", response: "No token provided" });
    }

    const decoded = TokenHelper.DecodeToken(token);
    if (typeof decoded == "object") {
      const currentTime = Math.floor(Date.now() / 1000);
      if (currentTime > decoded.expiresIn) {
        return res.json({
          status: "error",
          response: "Your token has expired. Please, login again.",
        });
      }
      req.user_id = decoded.user_id;
      req.email = decoded.email;
      next();
    } else {
      return res.json({
        status: "error",
        response: "Failed to decode you token. Please, try again.",
      });
    }
  } catch (error) {
    res.json({ status: "error", response: error.message });
  }
};

export default UserAuthorization;
