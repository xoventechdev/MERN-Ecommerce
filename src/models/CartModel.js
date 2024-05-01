import mongoose from "mongoose";

const cartSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default CartModel = mongoose.model("carts", cartSchema);
