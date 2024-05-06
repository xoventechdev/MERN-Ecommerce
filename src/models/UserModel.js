import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    otp: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const UserModel = mongoose.model("users", userSchema);

export default UserModel;
