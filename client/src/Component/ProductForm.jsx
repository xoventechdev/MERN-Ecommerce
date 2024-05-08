import React, { useState, useEffect } from "react";
import { getBrandList, getCategoryList } from "../Utility/APIHelper";

const ProductForm = () => {
  const [category, setCategory] = useState(null);
  const [brand, setBrand] = useState(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getBrand();
    getCategory();
  }, []);
  const getBrand = async () => {
    const data = await getBrandList();
    setBrand(data);
  };

  const getCategory = async () => {
    const data = await getCategoryList();
    setCategory(data);
  };

  const changeHandler = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  return (
    <div className="app-ecommerce">
      {/* Add Product */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
        <div className="d-flex flex-column justify-content-center">
          <h4 className="mb-1 mt-3">Add a new Product</h4>
          <p className="text-muted">Orders placed across your store</p>
        </div>
        <div className="d-flex align-content-center flex-wrap gap-3">
          <button className="btn btn-label-secondary">Discard</button>
          <button className="btn btn-label-primary">Save draft</button>
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
                <label className="form-label" htmlFor="ecommerce-product-name">
                  Product Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product title"
                  name="title"
                  aria-label="Product title"
                />
              </div>
              <div className="row mb-3"></div>
              {/* Short Description */}
              <div>
                <label class="form-label">Short Description</label>
                <div class="form-control p-0 pt-1">
                  <textarea
                    className="ql-editor ql-blank"
                    name="shortDes"
          
                    aria-label="Short Description"
                    placeholder="Short Description"
                  ></textarea>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="form-label">
                  Description <span className="text-muted">(Optional)</span>
                </label>
                <div className="form-control p-0 pt-1">
                  <div className="comment-toolbar border-0 border-bottom ql-toolbar ql-snow">
                    <div className="d-flex justify-content-start">
                      <span className="ql-formats me-0">
                        <button className="ql-bold" type="button">
                          <svg viewBox="0 0 18 18">
                            {" "}
                            <path
                              className="ql-stroke"
                              d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"
                            />{" "}
                            <path
                              className="ql-stroke"
                              d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"
                            />{" "}
                          </svg>
                        </button>
                        <button className="ql-italic" type="button">
                          <svg viewBox="0 0 18 18">
                            {" "}
                            <line
                              className="ql-stroke"
                              x1={7}
                              x2={13}
                              y1={4}
                              y2={4}
                            />{" "}
                            <line
                              className="ql-stroke"
                              x1={5}
                              x2={11}
                              y1={14}
                              y2={14}
                            />{" "}
                            <line
                              className="ql-stroke"
                              x1={8}
                              x2={10}
                              y1={14}
                              y2={4}
                            />{" "}
                          </svg>
                        </button>
                        <button className="ql-underline" type="button">
                          <svg viewBox="0 0 18 18">
                            {" "}
                            <path
                              className="ql-stroke"
                              d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"
                            />{" "}
                            <rect
                              className="ql-fill"
                              height={1}
                              rx="0.5"
                              ry="0.5"
                              width={12}
                              x={3}
                              y={15}
                            />{" "}
                          </svg>
                        </button>
                        <button
                          className="ql-list"
                          value="ordered"
                          type="button"
                        >
                          <svg viewBox="0 0 18 18">
                            {" "}
                            <line
                              className="ql-stroke"
                              x1={7}
                              x2={15}
                              y1={4}
                              y2={4}
                            />{" "}
                            <line
                              className="ql-stroke"
                              x1={7}
                              x2={15}
                              y1={9}
                              y2={9}
                            />{" "}
                            <line
                              className="ql-stroke"
                              x1={7}
                              x2={15}
                              y1={14}
                              y2={14}
                            />{" "}
                            <line
                              className="ql-stroke ql-thin"
                              x1="2.5"
                              x2="4.5"
                              y1="5.5"
                              y2="5.5"
                            />{" "}
                            <path
                              className="ql-fill"
                              d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"
                            />{" "}
                            <path
                              className="ql-stroke ql-thin"
                              d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"
                            />{" "}
                            <path
                              className="ql-stroke ql-thin"
                              d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"
                            />{" "}
                          </svg>
                        </button>
                        <button
                          className="ql-list"
                          value="bullet"
                          type="button"
                        >
                          <svg viewBox="0 0 18 18">
                            {" "}
                            <line
                              className="ql-stroke"
                              x1={6}
                              x2={15}
                              y1={4}
                              y2={4}
                            />{" "}
                            <line
                              className="ql-stroke"
                              x1={6}
                              x2={15}
                              y1={9}
                              y2={9}
                            />{" "}
                            <line
                              className="ql-stroke"
                              x1={6}
                              x2={15}
                              y1={14}
                              y2={14}
                            />{" "}
                            <line
                              className="ql-stroke"
                              x1={3}
                              x2={3}
                              y1={4}
                              y2={4}
                            />{" "}
                            <line
                              className="ql-stroke"
                              x1={3}
                              x2={3}
                              y1={9}
                              y2={9}
                            />{" "}
                            <line
                              className="ql-stroke"
                              x1={3}
                              x2={3}
                              y1={14}
                              y2={14}
                            />{" "}
                          </svg>
                        </button>
                        <button className="ql-link" type="button">
                          <svg viewBox="0 0 18 18">
                            {" "}
                            <line
                              className="ql-stroke"
                              x1={7}
                              x2={11}
                              y1={7}
                              y2={11}
                            />{" "}
                            <path
                              className="ql-even ql-stroke"
                              d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"
                            />{" "}
                            <path
                              className="ql-even ql-stroke"
                              d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"
                            />{" "}
                          </svg>
                        </button>
                        <button className="ql-image" type="button">
                          <svg viewBox="0 0 18 18">
                            {" "}
                            <rect
                              className="ql-stroke"
                              height={10}
                              width={12}
                              x={3}
                              y={4}
                            />{" "}
                            <circle className="ql-fill" cx={6} cy={7} r={1} />{" "}
                            <polyline
                              className="ql-even ql-fill"
                              points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"
                            />{" "}
                          </svg>
                        </button>
                      </span>
                    </div>
                  </div>
                  <div
                    className="comment-editor border-0 pb-4 ql-container ql-snow"
                    id="ecommerce-category-description"
                  >
                    <div
                      className="ql-editor ql-blank"
                      data-gramm="false"
                      contentEditable="true"
                      data-placeholder="Product Description"
                    >
                      <p>
                        <br />
                      </p>
                    </div>
                    <div
                      className="ql-clipboard"
                      contentEditable="true"
                      tabIndex={-1}
                    />
                    <div className="ql-tooltip ql-hidden">
                      <a
                        className="ql-preview"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="about:blank"
                      />
                      <input
                        type="text"
                        data-formula="e=mc^2"
                        data-link="https://quilljs.com"
                        data-video="Embed URL"
                      />
                      <a className="ql-action" />
                      <a className="ql-remove" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Product Information */}
          {/* Media */}
          <div className="card mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0 card-title">Media</h5>
              <a href="javascript:void(0);" className="fw-medium">
                Add media from URL
              </a>
            </div>
            <div className="card-body">
              <form
                action="/upload"
                className="dropzone needsclick dz-clickable"
                id="dropzone-basic"
              >
                <div className="dz-message needsclick my-5">
                  <p className="fs-4 note needsclick my-2">
                    Drag and drop your image here
                  </p>
                  <small className="text-muted d-block fs-6 my-2">or</small>
                  <span
                    className="note needsclick btn bg-label-primary d-inline"
                    id="btnBrowse"
                  >
                    Browse image
                  </span>
                </div>
              </form>
            </div>
          </div>
          {/* /Media */}
          {/* Variants */}
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="card-title mb-0">Variants</h5>
            </div>
            <div className="card-body">
              <form className="form-repeater">
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
                          <select
                            id="form-repeater-1-1"
                            className="select2 form-select select2-hidden-accessible"
                            data-placeholder="Size"
                            data-select2-id="form-repeater-1-1"
                            tabIndex={-1}
                            aria-hidden="true"
                          >
                            <option value="" data-select2-id={2}>
                              Size
                            </option>
                            <option value="size">Size</option>
                            <option value="color">Color</option>
                            <option value="weight">Weight</option>
                            <option value="smell">Smell</option>
                          </select>
                          <span
                            className="select2 select2-container select2-container--default"
                            dir="ltr"
                            data-select2-id={1}
                            style={{ width: "272.203px" }}
                          >
                            <span className="selection">
                              <span
                                className="select2-selection select2-selection--single"
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabIndex={0}
                                aria-disabled="false"
                                aria-labelledby="select2-form-repeater-1-1-container"
                              >
                                <span
                                  className="select2-selection__rendered"
                                  id="select2-form-repeater-1-1-container"
                                  role="textbox"
                                  aria-readonly="true"
                                >
                                  <span className="select2-selection__placeholder">
                                    Size
                                  </span>
                                </span>
                                <span
                                  className="select2-selection__arrow"
                                  role="presentation"
                                >
                                  <b role="presentation" />
                                </span>
                              </span>
                            </span>
                            <span
                              className="dropdown-wrapper"
                              aria-hidden="true"
                            />
                          </span>
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
                          type="number"
                          id="form-repeater-1-2"
                          className="form-control"
                          placeholder="Enter size"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="btn btn-primary" data-repeater-create="">
                    Add another option
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* /Variants */}
          {/* Inventory */}
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="card-title mb-0">Inventory</h5>
            </div>
            <div className="card-body">
              <div className="row">
                {/* Navigation */}
                <div className="col-12 col-md-4 mx-auto card-separator">
                  <div className="d-flex justify-content-between flex-column mb-3 mb-md-0 pe-md-3">
                    <ul
                      className="nav nav-align-left nav-pills flex-column"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          data-bs-toggle="tab"
                          data-bs-target="#restock"
                          aria-selected="true"
                          role="tab"
                        >
                          <i className="bx bx-cube me-2" />
                          <span className="align-middle">Restock</span>
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          data-bs-toggle="tab"
                          data-bs-target="#shipping"
                          aria-selected="false"
                          tabIndex={-1}
                          role="tab"
                        >
                          <i className="bx bx-car me-2" />
                          <span className="align-middle">Shipping</span>
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          data-bs-toggle="tab"
                          data-bs-target="#global-delivery"
                          aria-selected="false"
                          tabIndex={-1}
                          role="tab"
                        >
                          <i className="bx bx-globe me-2" />
                          <span className="align-middle">Global Delivery</span>
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          data-bs-toggle="tab"
                          data-bs-target="#attributes"
                          aria-selected="false"
                          tabIndex={-1}
                          role="tab"
                        >
                          <i className="bx bx-link me-2" />
                          <span className="align-middle">Attributes</span>
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          data-bs-toggle="tab"
                          data-bs-target="#advanced"
                          aria-selected="false"
                          tabIndex={-1}
                          role="tab"
                        >
                          <i className="bx bx-lock me-2" />
                          <span className="align-middle">Advanced</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /Navigation */}
                {/* Options */}
                <div className="col-12 col-md-8 pt-4 pt-md-0">
                  <div className="tab-content p-0 pe-md-5 ps-md-3">
                    {/* Restock Tab */}
                    <div
                      className="tab-pane fade show active"
                      id="restock"
                      role="tabpanel"
                    >
                      <h5>Options</h5>
                      <label
                        className="form-label"
                        htmlFor="ecommerce-product-stock"
                      >
                        Add to Stock
                      </label>
                      <div className="row mb-3 g-3">
                        <div className="col-12 col-sm-9">
                          <input
                            type="number"
                            className="form-control"
                            id="ecommerce-product-stock"
                            placeholder="Quantity"
                            name="quantity"
                            aria-label="Quantity"
                          />
                        </div>
                        <div className="col-12 col-sm-3">
                          <button className="btn btn-primary">
                            <i className="bx bx-check me-2" />
                            Confirm
                          </button>
                        </div>
                      </div>
                      <div>
                        <h6>
                          Product in stock now:{" "}
                          <span className="text-muted">54</span>
                        </h6>
                        <h6>
                          Product in transit:{" "}
                          <span className="text-muted">390</span>
                        </h6>
                        <h6>
                          Last time restocked:{" "}
                          <span className="text-muted">24th June, 2023</span>
                        </h6>
                        <h6>
                          Total stock over lifetime:{" "}
                          <span className="text-muted">2430</span>
                        </h6>
                      </div>
                    </div>
                    {/* Shipping Tab */}
                    <div
                      className="tab-pane fade"
                      id="shipping"
                      role="tabpanel"
                    >
                      <h5 className="mb-4">Shipping Type</h5>
                      <div>
                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="shippingType"
                            id="seller"
                          />
                          <label className="form-check-label" htmlFor="seller">
                            <span className="mb-1 h6">Fulfilled by Seller</span>
                            <br />
                            <small className="text-muted">
                              You'll be responsible for product delivery.
                              <br />
                              Any damage or delay during shipping may cost you a
                              Damage fee.
                            </small>
                          </label>
                        </div>
                        <div className="form-check mb-5">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="shippingType"
                            id="companyName"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="companyName"
                          >
                            <span className="mb-1 h6">
                              Fulfilled by Company name &nbsp;
                              <span className="badge rounded-2 badge-warning bg-label-warning fs-tiny py-1">
                                RECOMMENDED
                              </span>
                            </span>
                            <br />
                            <small className="text-muted">
                              Your product, Our responsibility.
                              <br />
                              For a measly fee, we will handle the delivery
                              process for you.
                            </small>
                          </label>
                        </div>
                        <p className="mb-0">
                          See our{" "}
                          <a href="javascript:void(0);">
                            Delivery terms and conditions
                          </a>{" "}
                          for details
                        </p>
                      </div>
                    </div>
                    {/* Global Delivery Tab */}
                    <div
                      className="tab-pane fade"
                      id="global-delivery"
                      role="tabpanel"
                    >
                      <h5 className="mb-4">Global Delivery</h5>
                      {/* Worldwide delivery */}
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="globalDel"
                          id="worldwide"
                        />
                        <label className="form-check-label" htmlFor="worldwide">
                          <span className="mb-1 h6">Worldwide delivery</span>
                          <br />
                          <small className="text-muted">
                            Only available with Shipping method:
                            <a href="javascript:void(0);">
                              Fulfilled by Company name
                            </a>
                          </small>
                        </label>
                      </div>
                      {/* Global delivery */}
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="globalDel"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label w-75 pe-5"
                          htmlFor="country-selected"
                        >
                          <span className="mb-2 h6">Selected Countries</span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Type Country name"
                            id="country-selected"
                          />
                        </label>
                      </div>
                      {/* Local delivery */}
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="globalDel"
                          id="local"
                        />
                        <label className="form-check-label" htmlFor="local">
                          <span className="mb-1 h6">Local delivery</span>
                          <br />
                          <small className="text-muted">
                            Deliver to your country of residence :
                            <a href="javascript:void(0);">
                              Change profile address
                            </a>
                          </small>
                        </label>
                      </div>
                    </div>
                    {/* Attributes Tab */}
                    <div
                      className="tab-pane fade"
                      id="attributes"
                      role="tabpanel"
                    >
                      <h5 className="mb-4">Attributes</h5>
                      <div>
                        {/* Fragile Product */}
                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue="fragile"
                            id="fragile"
                          />
                          <label className="form-check-label" htmlFor="fragile">
                            <span className="mb-0 h6">Fragile Product</span>
                          </label>
                        </div>
                        {/* Biodegradable */}
                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue="biodegradable"
                            id="biodegradable"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="biodegradable"
                          >
                            <span className="mb-0 h6">Biodegradable</span>
                          </label>
                        </div>
                        {/* Frozen Product */}
                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue="frozen"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label w-75 pe-5"
                            htmlFor="frozen"
                          >
                            <span className="mb-1 h6">Frozen Product</span>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Max. allowed Temperature"
                              id="frozen"
                            />
                          </label>
                        </div>
                        {/* Exp Date */}
                        <div className="form-check mb-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue="expDate"
                            id="expDate"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label w-75 pe-5"
                            htmlFor="date-input"
                          >
                            <span className="mb-1 h6">
                              Expiry Date of Product
                            </span>
                            <input
                              type="text"
                              className="product-date form-control flatpickr-input"
                              id="date-input"
                              readOnly="readonly"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* /Attributes Tab */}
                    {/* Advanced Tab */}
                    <div
                      className="tab-pane fade"
                      id="advanced"
                      role="tabpanel"
                    >
                      <h5 className="mb-4">Advanced</h5>
                      <div className="row">
                        {/* Product Id Type */}
                        <div className="col">
                          <label className="form-label" htmlFor="product-id">
                            <span className="mb-0 h6">Product ID Type</span>
                          </label>
                          <div className="position-relative">
                            <select
                              id="product-id"
                              className="select2 form-select select2-hidden-accessible"
                              data-placeholder="ISBN"
                              data-select2-id="product-id"
                              tabIndex={-1}
                              aria-hidden="true"
                            >
                              <option value="" data-select2-id={4}>
                                ISBN
                              </option>
                              <option value="ISBN">ISBN</option>
                              <option value="UPC">UPC</option>
                              <option value="EAN">EAN</option>
                              <option value="JAN">JAN</option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--default"
                              dir="ltr"
                              data-select2-id={3}
                              style={{ width: "auto" }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabIndex={0}
                                  aria-disabled="false"
                                  aria-labelledby="select2-product-id-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-product-id-container"
                                    role="textbox"
                                    aria-readonly="true"
                                  >
                                    <span className="select2-selection__placeholder">
                                      ISBN
                                    </span>
                                  </span>
                                  <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                  >
                                    <b role="presentation" />
                                  </span>
                                </span>
                              </span>
                              <span
                                className="dropdown-wrapper"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                        </div>
                        {/* Product Id */}
                        <div className="col">
                          <label className="form-label" htmlFor="product-id-1">
                            <span className="mb-0 h6">Product ID</span>
                          </label>
                          <input
                            type="number"
                            id="product-id-1"
                            className="form-control"
                            placeholder="ISBN Number"
                          />
                        </div>
                      </div>
                    </div>
                    {/* /Advanced Tab */}
                  </div>
                </div>
                {/* /Options*/}
              </div>
            </div>
          </div>
          {/* /Inventory */}
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
                <label className="form-label" htmlFor="ecommerce-product-price">
                  Base Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="ecommerce-product-price"
                  placeholder="Price"
                  name="productPrice"
                  aria-label="Product price"
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
                  id="ecommerce-product-discount-price"
                  placeholder="Discounted Price"
                  name="productDiscountedPrice"
                  aria-label="Product discounted price"
                />
              </div>
              {/* Charge tax check box */}
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="price-charge-tax"
                  defaultChecked=""
                />
                <label className="form-label" htmlFor="price-charge-tax">
                  Charge tax on this product
                </label>
              </div>
              {/* Instock switch */}
              <div className="d-flex justify-content-between align-items-center border-top pt-3">
                <span className="mb-0 h6">In stock</span>
                <div className="w-25 d-flex justify-content-end">
                  <label className="switch switch-primary switch-sm me-4 pe-2">
                    <input
                      type="checkbox"
                      className="switch-input"
                      defaultChecked=""
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
          {/* /Pricing Card */}
          {/* Organize Card */}
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="card-title mb-0">Organize</h5>
            </div>
            <div className="card-body">
              {/* Vendor */}
              <div className="mb-3 col ecommerce-select2-dropdown">
                <label className="form-label mb-1" htmlFor="vendor">
                  Brand
                </label>
                <div className="position-relative">
                  <select
                    id="vendor"
                    className="select2 form-select select2-hidden-accessible"
                    data-placeholder="Select Vendor"
                    data-select2-id="vendor"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <option value="" data-select2-id={6}>
                      Select Vendor
                    </option>
                    <option value="men-clothing">Men's Clothing</option>
                    <option value="women-clothing">Women's-clothing</option>
                    <option value="kid-clothing">Kid's-clothing</option>
                  </select>
                  <span
                    className="select2 select2-container select2-container--default"
                    dir="ltr"
                    data-select2-id={5}
                    style={{ width: "397.328px" }}
                  >
                    <span className="selection">
                      <span
                        className="select2-selection select2-selection--single"
                        role="combobox"
                        aria-haspopup="true"
                        aria-expanded="false"
                        tabIndex={0}
                        aria-disabled="false"
                        aria-labelledby="select2-vendor-container"
                      >
                        <span
                          className="select2-selection__rendered"
                          id="select2-vendor-container"
                          role="textbox"
                          aria-readonly="true"
                        >
                          <span className="select2-selection__placeholder">
                            Select Vendor
                          </span>
                        </span>
                        <span
                          className="select2-selection__arrow"
                          role="presentation"
                        >
                          <b role="presentation" />
                        </span>
                      </span>
                    </span>
                    <span className="dropdown-wrapper" aria-hidden="true" />
                  </span>
                </div>
              </div>
              {/* Category */}
              <div className="mb-3 col ecommerce-select2-dropdown">
                <label
                  className="form-label mb-1 d-flex justify-content-between align-items-center"
                  htmlFor="category-org"
                >
                  <span>Category</span>
                  <a href="javascript:void(0);" className="fw-medium">
                    Add new category
                  </a>
                </label>
                <div className="position-relative">
                  <select
                    id="category-org"
                    className="select2 form-select select2-hidden-accessible"
                    data-placeholder="Select Category"
                    data-select2-id="category-org"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <option value="" data-select2-id={8}>
                      Select Category
                    </option>
                    <option value="Household">Household</option>
                    <option value="Management">Management</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Office">Office</option>
                    <option value="Automotive">Automotive</option>
                  </select>
                  <span
                    className="select2 select2-container select2-container--default"
                    dir="ltr"
                    data-select2-id={7}
                    style={{ width: "397.328px" }}
                  >
                    <span className="selection">
                      <span
                        className="select2-selection select2-selection--single"
                        role="combobox"
                        aria-haspopup="true"
                        aria-expanded="false"
                        tabIndex={0}
                        aria-disabled="false"
                        aria-labelledby="select2-category-org-container"
                      >
                        <span
                          className="select2-selection__rendered"
                          id="select2-category-org-container"
                          role="textbox"
                          aria-readonly="true"
                        >
                          <span className="select2-selection__placeholder">
                            Select Category
                          </span>
                        </span>
                        <span
                          className="select2-selection__arrow"
                          role="presentation"
                        >
                          <b role="presentation" />
                        </span>
                      </span>
                    </span>
                    <span className="dropdown-wrapper" aria-hidden="true" />
                  </span>
                </div>
              </div>
              {/* Collection */}
              <div className="mb-3 col ecommerce-select2-dropdown">
                <label className="form-label mb-1" htmlFor="collection">
                  Collection
                </label>
                <div className="position-relative">
                  <select
                    id="collection"
                    className="select2 form-select select2-hidden-accessible"
                    data-placeholder="Collection"
                    data-select2-id="collection"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <option value="" data-select2-id={10}>
                      Collection
                    </option>
                    <option value="men-clothing">Men's Clothing</option>
                    <option value="women-clothing">Women's-clothing</option>
                    <option value="kid-clothing">Kid's-clothing</option>
                  </select>
                  <span
                    className="select2 select2-container select2-container--default"
                    dir="ltr"
                    data-select2-id={9}
                    style={{ width: "397.328px" }}
                  >
                    <span className="selection">
                      <span
                        className="select2-selection select2-selection--single"
                        role="combobox"
                        aria-haspopup="true"
                        aria-expanded="false"
                        tabIndex={0}
                        aria-disabled="false"
                        aria-labelledby="select2-collection-container"
                      >
                        <span
                          className="select2-selection__rendered"
                          id="select2-collection-container"
                          role="textbox"
                          aria-readonly="true"
                        >
                          <span className="select2-selection__placeholder">
                            Collection
                          </span>
                        </span>
                        <span
                          className="select2-selection__arrow"
                          role="presentation"
                        >
                          <b role="presentation" />
                        </span>
                      </span>
                    </span>
                    <span className="dropdown-wrapper" aria-hidden="true" />
                  </span>
                </div>
              </div>
              {/* Status */}
              <div className="mb-3 col ecommerce-select2-dropdown">
                <label className="form-label mb-1" htmlFor="status-org">
                  Status
                </label>
                <div className="position-relative">
                  <select
                    id="status-org"
                    className="select2 form-select select2-hidden-accessible"
                    data-placeholder="Published"
                    data-select2-id="status-org"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <option value="" data-select2-id={12}>
                      Published
                    </option>
                    <option value="Published">Published</option>
                    <option value="Scheduled">Scheduled</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                  <span
                    className="select2 select2-container select2-container--default"
                    dir="ltr"
                    data-select2-id={11}
                    style={{ width: "397.328px" }}
                  >
                    <span className="selection">
                      <span
                        className="select2-selection select2-selection--single"
                        role="combobox"
                        aria-haspopup="true"
                        aria-expanded="false"
                        tabIndex={0}
                        aria-disabled="false"
                        aria-labelledby="select2-status-org-container"
                      >
                        <span
                          className="select2-selection__rendered"
                          id="select2-status-org-container"
                          role="textbox"
                          aria-readonly="true"
                        >
                          <span className="select2-selection__placeholder">
                            Published
                          </span>
                        </span>
                        <span
                          className="select2-selection__arrow"
                          role="presentation"
                        >
                          <b role="presentation" />
                        </span>
                      </span>
                    </span>
                    <span className="dropdown-wrapper" aria-hidden="true" />
                  </span>
                </div>
              </div>
              {/* Tags */}
              <div className="mb-3">
                <label
                  htmlFor="ecommerce-product-tags"
                  className="form-label mb-1"
                >
                  Tags
                </label>
                <tags className="tagify  form-control" tabIndex={-1}>
                  <tag
                    title="Normal"
                    contentEditable="false"
                    spellCheck="false"
                    tabIndex={-1}
                    className="tagify__tag tagify--noAnim"
                    value="Normal"
                  >
                    <x
                      title=""
                      className="tagify__tag__removeBtn"
                      role="button"
                      aria-label="remove tag"
                    />
                    <div>
                      <span className="tagify__tag-text">Normal</span>
                    </div>
                  </tag>
                  <tag
                    title="Standard"
                    contentEditable="false"
                    spellCheck="false"
                    tabIndex={-1}
                    className="tagify__tag tagify--noAnim"
                    value="Standard"
                  >
                    <x
                      title=""
                      className="tagify__tag__removeBtn"
                      role="button"
                      aria-label="remove tag"
                    />
                    <div>
                      <span className="tagify__tag-text">Standard</span>
                    </div>
                  </tag>
                  <tag
                    title="Premium"
                    contentEditable="false"
                    spellCheck="false"
                    tabIndex={-1}
                    className="tagify__tag tagify--noAnim"
                    value="Premium"
                  >
                    <x
                      title=""
                      className="tagify__tag__removeBtn"
                      role="button"
                      aria-label="remove tag"
                    />
                    <div>
                      <span className="tagify__tag-text">Premium</span>
                    </div>
                  </tag>
                  <span
                    contentEditable=""
                    tabIndex={0}
                    data-placeholder="​"
                    aria-placeholder=""
                    className="tagify__input"
                    role="textbox"
                    aria-autocomplete="both"
                    aria-multiline="false"
                  />
                  ​
                </tags>
                <input
                  id="ecommerce-product-tags"
                  className="form-control"
                  name="ecommerce-product-tags"
                  defaultValue="Normal,Standard,Premium"
                  aria-label="Product Tags"
                  tabIndex={-1}
                />
              </div>
            </div>
          </div>
          {/* /Organize Card */}
        </div>
        {/* /Second column */}
      </div>
    </div>
  );
};

export default ProductForm;
