import mongoose from "mongoose";

const productDetailSchema = mongoose.Schema(
  {
    image1: {
      type: String,
      required: true,
    },
    image2: {
      type: String,
      required: true,
    },
    image3: {
      type: String,
      required: true,
    },
    image4: {
      type: String,
    },
    image5: {
      type: String,
    },
    des: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    productID: {
      type: mongoose.Schema.types.ObjectId,
      ref: "products",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default ProductDetailModel = mongoose.model(
  "productDetails",
  productDetailSchema
);
