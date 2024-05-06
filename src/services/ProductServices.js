import ProductModel from "../models/ProductModel.js";
import BrandModel from "../models/BrandModel.js";
import CategoryModel from "../models/CategoryModel.js";

const AddBrandList = async (req, res) => {
  try {
    const { brandName, brandImg } = req.body;
    if (brandName == null || brandImg == null) {
      res.json({
        status: "warning",
        response: "Brand name and brand image are required",
      });
    }
    const isMatched = await BrandModel.findOne({ brandName: brandName });
    if (isMatched) {
      res.json({
        status: "warning",
        response: `${brandName} already exists`,
      });
    }
    await BrandModel.updateOne(
      { brandName: brandName },
      { brandImg: brandImg },
      { upsert: true }
    );
    res.json({
      status: "success",
      response: `${brandName} added successfully`,
    });
  } catch (error) {
    res.json({ status: "error", response: error.message });
  }
};

const ViewBrandList = async (req, res) => {
  try {
    const list = await BrandModel.find();
    res.json({ status: "success", response: list });
  } catch (error) {
    res.json({ status: "error", response: error.message });
  }
};

const ViewBrandListByID = async (req, res) => {
  try {
    const { BrandID } = req.params;
    const list = await BrandModel.find({ _id: BrandID });
    res.json({ status: "success", response: list });
  } catch (error) {
    res.json({ status: "error", response: error.message });
  }
};

const AddCategoryList = async (req, res) => {
  try {
    const { categoryName, categoryImg } = req.body;
    if (categoryName == null || categoryImg == null) {
      res.json({
        status: "warning",
        response: "Category name and category image are required",
      });
    }
    const isMatched = await CategoryModel.findOne({
      categoryName: categoryName,
    });
    if (isMatched) {
      res.json({
        status: "warning",
        response: `${categoryName} name already exists`,
      });
    }
    await CategoryModel.updateOne(
      { categoryName: categoryName },
      { categoryImg: categoryImg },
      { upsert: true }
    );
    res.json({
      status: "success",
      response: `${categoryName} added successfully`,
    });
  } catch (error) {
    res.json({ status: "error", response: error.message });
  }
};

const ViewCategoryList = async (req, res) => {
  try {
    const list = await CategoryModel.find();
    res.json({ status: "success", response: list });
  } catch (error) {
    res.json({ status: "error", response: error.message });
  }
};

const ViewCategoryListByID = async (req, res) => {
  try {
    const { CategoryID } = req.params;
    const list = await CategoryModel.find({ _id: CategoryID });
    res.json({ status: "success", response: list });
  } catch (error) {
    res.json({ status: "error", response: error.message });
  }
};

export default {
  AddBrandList,
  ViewBrandList,
  ViewBrandListByID,
  AddCategoryList,
  ViewCategoryList,
  ViewCategoryListByID,
};
