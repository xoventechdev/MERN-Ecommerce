import ProductServices from "../services/ProductServices.js";

const AddBrandList = async (req, res) => {
  return await ProductServices.AddBrandList(req, res);
};

const ViewBrandList = async (req, res) => {
  return await ProductServices.ViewBrandList(req, res);
};

const ViewBrandListByID = async (req, res) => {
  return await ProductServices.ViewBrandListByID(req, res);
};

const AddCategoryList = async (req, res) => {
  return await ProductServices.AddCategoryList(req, res);
};

const ViewCategoryList = async (req, res) => {
  return await ProductServices.ViewCategoryList(req, res);
};

const ViewCategoryListByID = async (req, res) => {
  return await ProductServices.ViewCategoryListByID(req, res);
};

const AddProduct = async (req, res) => {
  return await ProductServices.AddProduct(req, res);
};

const UpdateProduct = async (req, res) => {
  return await ProductServices.UpdateProduct(req, res);
};

const ViewProductList = async (req, res) => {
  return await ProductServices.ViewProductList(req, res);
};

const ViewProductForEdit = async (req, res) => {
  return await ProductServices.ViewProductForEdit(req, res);
};

const DeleteProduct = async (req, res) => {
  return await ProductServices.DeleteProduct(req, res);
};
export default {
  AddBrandList,
  ViewBrandList,
  ViewBrandListByID,
  AddCategoryList,
  ViewCategoryList,
  ViewCategoryListByID,
  AddProduct,
  UpdateProduct,
  ViewProductList,
  ViewProductForEdit,
  DeleteProduct,
};
