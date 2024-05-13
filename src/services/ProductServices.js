import ProductModel from "../models/ProductModel.js";
import ProductDetailModel from "../models/ProductDetailModel.js";
import BrandModel from "../models/BrandModel.js";
import CategoryModel from "../models/CategoryModel.js";
import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;

const AddBrandList = async (req, res) => {
  try {
    const { brandName, brandImg } = req.body;
    if (brandName == null && brandImg == null) {
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
    if (categoryName == null && categoryImg == null) {
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

const AddProduct = async (req, res) => {
  try {
    const {
      title,
      shortDes,
      des,
      image1,
      image2,
      image3,
      image4,
      image5,
      color,
      size,
      price,
      discountPrice,
      discount,
      quantity,
      stock,
      brandID,
      categoryID,
      remark,
      isPublished,
    } = req.body;

    if (
      title === "" &&
      shortDes === "" &&
      des === "" &&
      image1 === "" &&
      image2 === "" &&
      image3 === "" &&
      color === "" &&
      size === "" &&
      price === "" &&
      quantity === "" &&
      remark === "" &&
      isPublished === ""
    ) {
      return res.json({
        status: "warning",
        response: "Please, fill-up all required data.",
      });
    }

    const isExits = await ProductModel.findOne({ title: title });
    if (isExits) {
      return res.json({
        status: "warning",
        response: `${title} already exists`,
      });
    }

    const productAdded = await ProductModel.updateOne(
      { title: title },
      {
        title: title,
        shortDes: shortDes,
        price: price,
        discount: discount,
        discountPrice: discountPrice,
        stock: stock,
        quantity: quantity,
        remark: remark,
        isPublished: isPublished,
        categoryID: categoryID,
        brandID: brandID,
      },
      { upsert: true }
    );

    if (!productAdded.acknowledged === true) {
      return res.json({
        status: "warning",
        response: "Something went wrong. Try again for add product data.",
      });
    }
    const product_ID = productAdded.upsertedId;
    const productDetailAdded = await ProductDetailModel.updateOne(
      { productID: product_ID },
      {
        image1: image1,
        image2: image2,
        image3: image3,
        image4: image4,
        image5: image5,
        des: des,
        color: color,
        size: size,
      },
      { upsert: true }
    );
    if (productDetailAdded.acknowledged === true) {
      if (productDetailAdded.modifiedCount > 0) {
        return res.json({
          status: "success",
          response: `Product updated successfully`,
        });
      } else if (productDetailAdded.upsertedCount > 0) {
        return res.json({
          status: "success",
          response: `Product added successfully`,
        });
      } else {
        return res.json({
          status: "warning",
          response: "Something went wrong. Try again for add product data.",
        });
      }
    }
  } catch (error) {
    res.json({ status: "error", response: error.message });
  }
};

const ViewProductList = async (req, res) => {
  try {
    const product = await ProductModel.aggregate([
      {
        $lookup: {
          from: "productdetails",
          localField: "_id",
          foreignField: "productID",
          as: "details",
        },
      },
      {
        $lookup: {
          from: "categories",
          localField: "categoryID",
          foreignField: "_id",
          as: "categories",
        },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          price: 1,
          isPublished: 1,
          quantity: 1,
          stock: 1,
          image: { $arrayElemAt: ["$details.image1", 0] },
          category: { $arrayElemAt: ["$categories.categoryName", 0] },
        },
      },
    ]);

    return res.json({ status: "success", response: product });
  } catch (error) {
    res.json({ status: "error", response: error.message });
  }
};

const ViewProductForEdit = async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);
    const product = await ProductModel.aggregate([
      {
        $match: { _id: id },
      },
      {
        $lookup: {
          from: "productdetails",
          localField: "_id",
          foreignField: "productID",
          as: "details",
        },
      },
      {
        $project: {
          _id: 0,
          title: 1,
          shortDes: 1,
          des: { $arrayElemAt: ["$details.des", 0] },
          image1: { $arrayElemAt: ["$details.image1", 0] },
          image2: { $arrayElemAt: ["$details.image2", 0] },
          image3: { $arrayElemAt: ["$details.image3", 0] },
          image4: { $arrayElemAt: ["$details.image4", 0] },
          image5: { $arrayElemAt: ["$details.image5", 0] },
          color: { $arrayElemAt: ["$details.color", 0] },
          size: { $arrayElemAt: ["$details.size", 0] },
          price: 1,
          discountPrice: 1,
          discount: 1,
          quantity: 1,
          stock: 1,
          brandID: 1,
          categoryID: 1,
          remark: 1,
          isPublished: 1,
        },
      },
    ]);

    if (!product.length > 0) {
      return res.json({ status: "warning", response: "Product not found" });
    }
    res.json({ status: "success", response: product });
  } catch (error) {
    res.json({ status: "error", response: error.message });
  }
};

const DeleteProduct = async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);

    console.log(id);
    await ProductModel.Delete({ _id: id });
    await ProductDetailModel.Delete({ productID: id });
    res.json({ status: "success", response: "Product deleted successfully" });
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
  AddProduct,
  ViewProductList,
  ViewProductForEdit,
  DeleteProduct,
};
