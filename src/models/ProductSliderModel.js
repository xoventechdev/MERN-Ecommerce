import mongoose from "mongoose";

const sliderSchema = mongoose.Schema(
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
    image: {
      type: String,
      required: true,
    },
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export default ProductSliderModel = mongoose.model(
  "sliders",
  ProductSliderModel
);
