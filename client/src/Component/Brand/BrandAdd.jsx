import React from "react";

const BrandAdd = () => {
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex={-1}
      id="offcanvasEcommerceCategoryList"
      aria-labelledby="offcanvasEcommerceCategoryListLabel"
    >
      {/* Offcanvas Header */}
      <div className="offcanvas-header py-4">
        <h5
          id="offcanvasEcommerceCategoryListLabel"
          className="offcanvas-title"
        >
          Add Category
        </h5>
        <button
          type="button"
          className="btn-close bg-label-secondary text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      {/* Offcanvas Body */}
      <div className="offcanvas-body border-top">
        <form
          className="pt-0 fv-plugins-bootstrap5 fv-plugins-framework"
          id="eCommerceCategoryListForm"
          onsubmit="return true"
          noValidate="novalidate"
        >
          {/* Title */}
          <div className="mb-3 fv-plugins-icon-container">
            <label className="form-label" htmlFor="ecommerce-category-title">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="ecommerce-category-title"
              placeholder="Enter category title"
              name="categoryTitle"
              aria-label="category title"
            />
            <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
          </div>
          {/* Slug */}
          <div className="mb-3 fv-plugins-icon-container">
            <label className="form-label" htmlFor="ecommerce-category-slug">
              Slug
            </label>
            <input
              type="text"
              id="ecommerce-category-slug"
              className="form-control"
              placeholder="Enter slug"
              aria-label="slug"
              name="slug"
            />
            <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
          </div>
          {/* Image */}
          <div className="mb-3">
            <label className="form-label" htmlFor="ecommerce-category-image">
              Attachment
            </label>
            <input
              className="form-control"
              type="file"
              id="ecommerce-category-image"
            />
          </div>
          {/* Parent category */}
          <div className="mb-3 ecommerce-select2-dropdown">
            <label
              className="form-label"
              htmlFor="ecommerce-category-parent-category"
            >
              Parent category
            </label>
            <div className="position-relative">
              <select
                id="ecommerce-category-parent-category"
                className="select2 form-select select2-hidden-accessible"
                data-placeholder="Select parent category"
                data-select2-id="ecommerce-category-parent-category"
                tabIndex={-1}
                aria-hidden="true"
              >
                <option value="" data-select2-id={2}>
                  Select parent Category
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
                data-select2-id={1}
                style={{ width: 352 }}
              >
                <span className="selection">
                  <span
                    className="select2-selection select2-selection--single"
                    role="combobox"
                    aria-haspopup="true"
                    aria-expanded="false"
                    tabIndex={0}
                    aria-disabled="false"
                    aria-labelledby="select2-ecommerce-category-parent-category-container"
                  >
                    <span
                      className="select2-selection__rendered"
                      id="select2-ecommerce-category-parent-category-container"
                      role="textbox"
                      aria-readonly="true"
                    >
                      <span className="select2-selection__placeholder">
                        Select parent category
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
          {/* Description */}
          <div className="mb-3">
            <label className="form-label">Description</label>
            <div className="form-control p-0 pt-1">
              <div
                className="comment-editor border-0 ql-container ql-snow"
                id="ecommerce-category-description"
              >
                <div
                  className="ql-editor ql-blank"
                  data-gramm="false"
                  contentEditable="true"
                  data-placeholder="Enter category description..."
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
              <div className="comment-toolbar border-0 rounded ql-toolbar ql-snow">
                <div className="d-flex justify-content-end">
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
                    <button className="ql-list" value="ordered" type="button">
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
                    <button className="ql-list" value="bullet" type="button">
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
            </div>
          </div>
          {/* Status */}
          <div className="mb-4 ecommerce-select2-dropdown">
            <label className="form-label">Select category status</label>
            <div className="position-relative">
              <select
                id="ecommerce-category-status"
                className="select2 form-select select2-hidden-accessible"
                data-placeholder="Select category status"
                data-select2-id="ecommerce-category-status"
                tabIndex={-1}
                aria-hidden="true"
              >
                <option value="" data-select2-id={4}>
                  Select category status
                </option>
                <option value="Scheduled">Scheduled</option>
                <option value="Publish">Publish</option>
                <option value="Inactive">Inactive</option>
              </select>
              <span
                className="select2 select2-container select2-container--default"
                dir="ltr"
                data-select2-id={3}
                style={{ width: 352 }}
              >
                <span className="selection">
                  <span
                    className="select2-selection select2-selection--single"
                    role="combobox"
                    aria-haspopup="true"
                    aria-expanded="false"
                    tabIndex={0}
                    aria-disabled="false"
                    aria-labelledby="select2-ecommerce-category-status-container"
                  >
                    <span
                      className="select2-selection__rendered"
                      id="select2-ecommerce-category-status-container"
                      role="textbox"
                      aria-readonly="true"
                    >
                      <span className="select2-selection__placeholder">
                        Select category status
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
          {/* Submit and reset */}
          <div className="mb-3">
            <button
              type="submit"
              className="btn btn-primary me-sm-3 me-1 data-submit"
            >
              Add
            </button>
            <button
              type="reset"
              className="btn bg-label-danger"
              data-bs-dismiss="offcanvas"
            >
              Discard
            </button>
          </div>
          <input type="hidden" />
        </form>
      </div>
    </div>
  );
};

export default BrandAdd;
