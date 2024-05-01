import mongoose from "mongoose";

const categorySchema = mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
      unique: true,
    },
    categoryImg: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export default CategoryModel = mongoose.model("categories", categorySchema);
