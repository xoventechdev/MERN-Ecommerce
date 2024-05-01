import mongoose from "mongoose";

const profileSchema = mongoose.Schema(
  {
    cusName: {
      type: String,
      required: true,
    },
    cusAddress: {
      type: String,
      required: true,
    },
    cusCity: {
      type: String,
      required: true,
    },
    cusState: {
      type: String,
      required: true,
    },
    cusPostCode: {
      type: String,
      required: true,
    },
    cusCountry: {
      type: String,
      required: true,
    },
    cusPhone: {
      type: String,
      required: true,
    },
    cusFax: {
      type: String,
    },
    shipName: {
      type: String,
      required: true,
    },
    shipAddress: {
      type: String,
      required: true,
    },
    shipCity: {
      type: String,
      required: true,
    },
    shipState: {
      type: String,
      required: true,
    },
    shipPostCode: {
      type: String,
      required: true,
    },
    shipCountry: {
      type: String,
      required: true,
    },
    shipPhone: {
      type: String,
      required: true,
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export default ProfileModel = mongoose.model("profiles", profileSchema);
