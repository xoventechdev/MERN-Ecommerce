import JWT from "jsonwebtoken";

const EncodeToken = (email, user_id) => {
  try {
    const KEY = "JoyBangla-135";
    const EXP = { expiresIn: "1D" };
    const PAYLOAD = { email: email, user_id: user_id };
    return JWT.sign(PAYLOAD, KEY, EXP);
  } catch (error) {
    return error.message;
  }
};

const DecodeToken = (token) => {
  try {
    const KEY = "JoyBangla-135";
    const PAYLOAD = JWT.verify(token, KEY);
    return PAYLOAD;
  } catch (error) {
    return error.message;
  }
};

export default { EncodeToken, DecodeToken };
