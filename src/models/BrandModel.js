import mongoose from "mongoose";

const brandSchema = mongoose.Schema(
  {
    brandName: {
      type: String,
      required: true,
      unique: true,
    },
    brandImg: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

export default BrandModel = mongoose.model("brands", brandSchema);
