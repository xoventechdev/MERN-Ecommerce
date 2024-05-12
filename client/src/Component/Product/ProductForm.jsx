import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  getBrandList,
  getCategoryList,
  addProductToServer,
} from "../../Utility/APIHelper";
import { ToastContainer } from "react-toastify";
import {
  ErrorDex,
  SuccessDex,
  InfoDex,
} from "../../Utility/AdditionalServices";
import RedStar from "../Shared/RedStar";

const ProductForm = () => {
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [product, setProduct] = useState({
    title: "",
    shortDes: "",
    des: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    color: "",
    size: "",
    price: "",
    discountPrice: "",
    discount: false,
    quantity: 0,
    stock: true,
    brandID: "",
    categoryID: "",
    remark: "",
    isPublished: true,
  });

  useEffect(() => {
    getBrand();
    getCategory();
  }, []);
  const getBrand = async () => {
    const data = await getBrandList();
    setBrand(data.response);
  };

  const getCategory = async () => {
    const data = await getCategoryList();
    setCategory(data.response);
  };

  const changeHandler = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const editorHandler = (content) => {
    setProduct({ ...product, des: content });
  };

  const savetoServer = async (e) => {
    e.preventDefault();

    console.log(product);

    if (
      product.title === "" ||
      product.shortDes === "" ||
      product.des === "" ||
      product.image1 === "" ||
      product.image2 === "" ||
      product.image3 === "" ||
      product.color === "" ||
      product.size === "" ||
      product.price === "" ||
      product.quantity === "" ||
      product.remark === "" ||
      product.isPublished === ""
    ) {
      return ErrorDex("Please fill all the fields");
    }

    console.log(product);
    const data = await addProductToServer(product);

    console.log(data);

    if (data.status == "success") {
      setProduct({
        title: "",
        shortDes: "",
        des: "",
        image1: "",
        image2: "",
        image3: "",
        image4: "",
        image5: "",
        color: "",
        size: "",
        price: "",
        discountPrice: "",
        discount: false,
        quantity: 0,
        stock: true,
        brandID: "",
        categoryID: "",
        remark: "",
        isPublished: true,
      });
      SuccessDex("Product Added Successfully");
    } else {
      ErrorDex(data.response.message);
    }
  };

  const discardBtn = (e) => {
    e.preventDefault();
    setProduct({
      title: "",
      shortDes: "",
      des: "",
      image1: "",
      image2: "",
      image3: "",
      image4: "",
      image5: "",
      color: "",
      size: "",
      price: "",
      discountPrice: "",
      discount: false,
      quantity: 0,
      stock: true,
      brandID: "",
      categoryID: "",
      remark: "",
      isPublished: true,
    });
  };

  return (
    <div className="app-ecommerce">
      <ToastContainer />
      {/* Add Product */}
      <form onSubmit={savetoServer}>
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
          <div className="d-flex flex-column justify-content-center">
            <h4 className="mb-1 mt-3">Add a new Product</h4>
            <p className="text-muted">Orders placed across your store</p>
          </div>
          <div className="d-flex align-content-center flex-wrap gap-3">
            <button onClick={discardBtn} className="btn btn-label-secondary">
              Discard
            </button>
            <button type="submit" className="btn btn-primary">
              Publish product
            </button>
          </div>
        </div>
        <div className="row">
          {/* First column*/}
          <div className="col-12 col-lg-8">
            {/* Product Information */}
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="card-tile mb-0">Product information</h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label
                    className="form-label"
                    htmlFor="ecommerce-product-name"
                  >
                    Product Title <RedStar />
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Product title"
                    name="title"
                    aria-label="Product title"
                    onChange={changeHandler}
                    value={product.title}
                  />
                </div>
                {/* Short Description */}
                <div>
                  <label className="form-label">
                    Short Description <RedStar />
                  </label>
                  <div className="form-control p-0">
                    <textarea
                      className=" form-control w-100"
                      name="shortDes"
                      rows={2}
                      aria-label="Short Description"
                      placeholder="Short Description"
                      onChange={changeHandler}
                      value={product.shortDes}
                    ></textarea>
                  </div>
                </div>

                {/* Description */}

                <div>
                  <label className="form-label">
                    Description <RedStar />
                  </label>
                  <div className="form-control p-0">
                    <ReactQuill
                      className=" w-100"
                      name="des"
                      onChange={editorHandler}
                      value={product.des}
                    ></ReactQuill>
                  </div>
                </div>
              </div>
            </div>
            {/* /Product Information */}
            {/* Media */}
            <div className="card mb-4">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0 card-title">Media</h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label
                    className="form-label"
                    htmlFor="ecommerce-product-name"
                  >
                    Product Image <RedStar />
                  </label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Product Image 1 (Required)"
                    name="image1"
                    aria-label="Product Image 1 (Required)"
                    onChange={changeHandler}
                    value={product.image1}
                  />
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Product Image 2 (Required)"
                    name="image2"
                    aria-label="Product Image 2 (Required)"
                    onChange={changeHandler}
                    value={product.image2}
                  />
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Product Image 3 (Required)"
                    name="image3"
                    aria-label="Product Image 3 (Required)"
                    onChange={changeHandler}
                    value={product.image3}
                  />
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Product Image 4"
                    name="image4"
                    aria-label="Product Image 4"
                    onChange={changeHandler}
                    value={product.image4}
                  />
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Product Image 5"
                    name="image5"
                    aria-label="Product Image 5"
                    onChange={changeHandler}
                    value={product.image5}
                  />
                </div>
              </div>
            </div>
            {/* /Media */}
            {/* Variants */}
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="card-title mb-0">Variants</h5>
              </div>
              <div className="card-body">
                <div data-repeater-list="group-a">
                  <div data-repeater-item="">
                    <div className="row">
                      <div className="mb-3 col-4">
                        <label
                          className="form-label"
                          htmlFor="form-repeater-1-1"
                        >
                          Options
                        </label>
                        <div className="position-relative">
                          <p className="form-control">
                            Color <RedStar />
                          </p>
                        </div>
                        <div className="position-relative">
                          <p className="form-control">
                            Size <RedStar />
                          </p>
                        </div>
                      </div>
                      <div className="mb-3 col-8">
                        <label
                          className="form-label invisible"
                          htmlFor="form-repeater-1-2"
                        >
                          Not visible
                        </label>
                        <input
                          type="text"
                          name="color"
                          className="form-control"
                          placeholder="Enter Color"
                          onChange={changeHandler}
                          value={product.color}
                        />
                        <input
                          type="text"
                          name="size"
                          className="form-control mt-3"
                          placeholder="Enter size"
                          onChange={changeHandler}
                          value={product.size}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Variants */}
          </div>
          {/* /Second column */}
          {/* Second column */}
          <div className="col-12 col-lg-4">
            {/* Pricing Card */}
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="card-title mb-0">Pricing</h5>
              </div>
              <div className="card-body">
                {/* Base Price */}
                <div className="mb-3">
                  <label
                    className="form-label"
                    htmlFor="ecommerce-product-price"
                  >
                    Base Price <RedStar />
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Price"
                    name="price"
                    aria-label="Product price"
                    onChange={changeHandler}
                    value={product.price}
                  />
                </div>
                {/* Discounted Price */}
                <div className="mb-3">
                  <label
                    className="form-label"
                    htmlFor="ecommerce-product-discount-price"
                  >
                    Discounted Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Discounted Price"
                    name="discountPrice"
                    aria-label="Product discounted price"
                    onChange={changeHandler}
                    value={product.discountPrice}
                  />
                </div>
                {/* Charge tax check box */}
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue="false"
                    name="discount"
                    defaultChecked=""
                    onChange={changeHandler}
                    value={product.discount}
                  />
                  <label className="form-label" htmlFor="discount">
                    Discount on this product
                  </label>
                </div>
              </div>
            </div>
            {/* /Pricing Card */}

            <div className="card mb-4">
              <div className="card-header">
                <h5 className="card-title mb-0">Inventory</h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label
                    className="form-label"
                    htmlFor="ecommerce-product-price"
                  >
                    Quantity <RedStar />
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Quantity"
                    name="quantity"
                    aria-label="Quantity"
                    onChange={changeHandler}
                    value={product.quantity}
                  />
                </div>
                {/* Instock switch */}
                <div className="d-flex justify-content-between align-items-center border-top pt-3">
                  <span className="mb-0 h6">In stock</span>
                  <div className="w-25 d-flex justify-content-end">
                    <label className="switch switch-primary switch-sm me-4 pe-2">
                      <input
                        type="checkbox"
                        name="stock"
                        className="switch-input"
                        defaultChecked="true"
                        onChange={changeHandler}
                        value={product.stock}
                      />
                      <span className="switch-toggle-slider">
                        <span className="switch-on">
                          <span className="switch-off" />
                        </span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Organize Card */}
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="card-title mb-0">Organize</h5>
              </div>
              <div className="card-body">
                {/* Vendor */}
                <div className="mb-3 col ecommerce-select2-dropdown">
                  <label className="form-label mb-1" htmlFor="vendor">
                    Brand <RedStar />
                  </label>
                  <div className="position-relative">
                    <select
                      name="brandID"
                      className="select2 form-select select2-hidden-accessible"
                      data-placeholder="Select Vendor"
                      data-select2-id="vendor"
                      tabIndex={-1}
                      onChange={changeHandler}
                      value={product.brandID}
                      aria-hidden="true"
                    >
                      <option value="">Select a brand</option>
                      {brand.length > 0 &&
                        brand.map((item) => (
                          <option key={item._id} value={item._id}>
                            {item.brandName}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                {/* Category */}
                <div className="mb-3 col ecommerce-select2-dropdown">
                  <label
                    className="form-label mb-1 d-flex justify-content-between align-items-center"
                    htmlFor="category-org"
                  >
                    <span>
                      Category <RedStar />
                    </span>
                  </label>
                  <div className="position-relative">
                    <select
                      name="categoryID"
                      className="select2 form-select select2-hidden-accessible"
                      data-placeholder="Select Category"
                      data-select2-id="category-org"
                      tabIndex={-1}
                      aria-hidden="true"
                      onChange={changeHandler}
                      value={product.categoryID}
                    >
                      <option value="" data-select2-id={8}>
                        Select a Category
                      </option>
                      {category.length > 0 &&
                        category.map((item) => (
                          <option key={item._id} value={item._id}>
                            {item.categoryName}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                {/* Remark */}
                <div className="mb-3 col ecommerce-select2-dropdown">
                  <label className="form-label mb-1" htmlFor="Remark">
                    Remark <RedStar />
                  </label>
                  <div className="position-relative">
                    <select
                      name="remark"
                      className="select2 form-select select2-hidden-accessible"
                      data-placeholder="Remark"
                      data-select2-id="Remark"
                      tabIndex={-1}
                      aria-hidden="true"
                      onChange={changeHandler}
                      value={product.remark}
                    >
                      <option value="new">New</option>
                      <option value="popularen">Popular</option>
                      <option value="trading">Trading</option>
                    </select>
                  </div>
                </div>
                {/* Status */}
                <div className="mb-3 col ecommerce-select2-dropdown">
                  <label className="form-label mb-1" htmlFor="status-org">
                    Status
                  </label>
                  <div className="position-relative">
                    <select
                      name="isPublished"
                      className="select2 form-select select2-hidden-accessible"
                      data-placeholder="Published"
                      data-select2-id="status-org"
                      tabIndex={-1}
                      aria-hidden="true"
                      onChange={changeHandler}
                      value={product.isPublished}
                    >
                      <option value="Published">Published</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {/* /Organize Card */}
          </div>
          {/* /Second column */}
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
