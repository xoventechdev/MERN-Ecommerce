import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    customerID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default ReviewModel = mongoose.model("reviews", reviewSchema);
