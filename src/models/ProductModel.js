import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    shortDes: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Boolean,
      required: true,
      default: false,
    },
    discountPrice: {
      type: Number,
      required: true,
    },
    stock: {
      type: Boolean,
      required: true,
      default: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    star: {
      type: String,
      required: true,
    },
    remark: {
      type: String,
      required: true,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    categoryID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
      required: true,
    },
    brandID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "brands",
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const ProductModel = mongoose.model("products", productSchema);

export default ProductModel;
