import mongoose from "mongoose";

const wishSchema = mongoose.Schema(
  {
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
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

export default ProductWishModel = mongoose.model("wishes", wishSchema);
