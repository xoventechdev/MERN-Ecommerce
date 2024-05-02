import JWT from "jsonwebtoken";

exports.EncodeToken = (email, user_id) => {
  try {
    const KEY = "JoyBangla-135";
    const EXP = { expiresIn: "1D" };
    const PAYLOAD = { email: email, user_id: user_id };
    return JWT.sign(EXP, PAYLOAD, KEY);
  } catch (error) {
    return error.message;
  }
};

exports.DecodeToken = (token) => {
  try {
    const KEY = "JoyBangla-135";
    const PAYLOAD = JWT.verify(token, KEY);
    return PAYLOAD;
  } catch (error) {
    return error.message;
  }
};
