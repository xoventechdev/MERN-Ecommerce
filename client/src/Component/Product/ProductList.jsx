import React from "react";
import "datatables.net-bs5";

const ProductList = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">Filter</h5>
        <div className="d-flex justify-content-between align-items-center row py-3 gap-3 gap-md-0">
          <div className="col-md-4 product_status">
            <select className="form-select text-capitalize" id="ProductStatus">
              <option value="">Status</option>
              <option value="Scheduled">Scheduled</option>
              <option value="Publish">Publish</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="col-md-4 product_category">
            <select
              className="form-select text-capitalize"
              id="ProductCategory"
            >
              <option value="">Category</option>
              <option value="Household">Household</option>
              <option value="Office">Office</option>
              <option value="Electronics">Electronics</option>
              <option value="Shoes">Shoes</option>
              <option value="Accessories">Accessories</option>
              <option value="Game">Game</option>
            </select>
          </div>
          <div className="col-md-4 product_stock">
            <select className="form-select text-capitalize" id="ProductStock">
              <option value=""> Stock </option>
              <option value="Out_of_Stock">Out of Stock</option>
              <option value="In_Stock">In Stock</option>
            </select>
          </div>
        </div>
      </div>
      <div className="card-datatable table-responsive">
        <div
          className="dataTables_wrapper dt-bootstrap5 no-footer"
          id="DataTables_Table_0_wrapper"
        >
          <div className="card-header d-flex border-top rounded-0 flex-wrap py-md-0">
            <div className="me-5 ms-n2 pe-5">
              <div className="dataTables_filter" id="DataTables_Table_0_filter">
                <label>
                  <input
                    aria-controls="DataTables_Table_0"
                    className="form-control"
                    placeholder="Search Product"
                    type="search"
                  />
                </label>
              </div>
            </div>
            <div className="d-flex justify-content-start justify-content-md-end align-items-baseline">
              <div className="dt-action-buttons d-flex align-items-start align-items-md-center justify-content-sm-center mb-3 mb-sm-0">
                <div
                  className="dataTables_length mt-0 mt-md-3 me-3"
                  id="DataTables_Table_0_length"
                >
                  <label>
                    <select
                      aria-controls="DataTables_Table_0"
                      className="form-select"
                      name="DataTables_Table_0_length"
                    >
                      <option value="7">7</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="50">50</option>
                      <option value="70">70</option>
                      <option value="100">100</option>
                    </select>
                  </label>
                </div>
                <div className="dt-buttons btn-group flex-wrap d-flex">
                  {" "}
                  <div className="btn-group">
                    <button
                      aria-controls="DataTables_Table_0"
                      aria-expanded="false"
                      aria-haspopup="dialog"
                      className="btn buttons-collection dropdown-toggle btn-label-secondary me-3"
                      tabIndex="0"
                      type="button"
                    >
                      <span>
                        <i className="bx bx-export me-1" />
                        Export
                      </span>
                    </button>
                  </div>{" "}
                  <button
                    aria-controls="DataTables_Table_0"
                    className="btn btn-secondary add-new btn-primary"
                    tabIndex="0"
                    type="button"
                  >
                    <span>
                      <i className="bx bx-plus me-0 me-sm-1" />
                      <span className="d-none d-sm-inline-block">
                        Add Product
                      </span>
                    </span>
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
          <table
            aria-describedby="DataTables_Table_0_info"
            className="datatables-products table border-top dataTable no-footer dtr-column"
            id="DataTables_Table_0"
            style={{
              width: "1391px",
            }}
          >
            <thead>
              <tr>
                <th
                  aria-label=""
                  className="control sorting_disabled dtr-hidden"
                  colSpan="1"
                  rowSpan="1"
                  style={{
                    display: "none",
                    width: "0px",
                  }}
                />
                <th
                  aria-label=""
                  className="sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all"
                  colSpan="1"
                  data-col="1"
                  rowSpan="1"
                  style={{
                    width: "18px",
                  }}
                >
                  <input className="form-check-input" type="checkbox" />
                </th>
                <th
                  aria-controls="DataTables_Table_0"
                  aria-label="product: activate to sort column ascending"
                  className="sorting"
                  colSpan="1"
                  rowSpan="1"
                  style={{
                    width: "434px",
                  }}
                  tabIndex="0"
                >
                  product
                </th>
                <th
                  aria-controls="DataTables_Table_0"
                  aria-label="category: activate to sort column ascending"
                  className="sorting"
                  colSpan="1"
                  rowSpan="1"
                  style={{
                    width: "137px",
                  }}
                  tabIndex="0"
                >
                  category
                </th>
                <th
                  aria-label="stock"
                  className="sorting_disabled"
                  colSpan="1"
                  rowSpan="1"
                  style={{
                    width: "60px",
                  }}
                >
                  stock
                </th>
                <th
                  aria-controls="DataTables_Table_0"
                  aria-label="sku: activate to sort column ascending"
                  className="sorting"
                  colSpan="1"
                  rowSpan="1"
                  style={{
                    width: "51px",
                  }}
                  tabIndex="0"
                >
                  sku
                </th>
                <th
                  aria-controls="DataTables_Table_0"
                  aria-label="price: activate to sort column ascending"
                  className="sorting"
                  colSpan="1"
                  rowSpan="1"
                  style={{
                    width: "81px",
                  }}
                  tabIndex="0"
                >
                  price
                </th>
                <th
                  aria-controls="DataTables_Table_0"
                  aria-label="qty: activate to sort column ascending"
                  className="sorting"
                  colSpan="1"
                  rowSpan="1"
                  style={{
                    width: "39px",
                  }}
                  tabIndex="0"
                >
                  qty
                </th>
                <th
                  aria-controls="DataTables_Table_0"
                  aria-label="status: activate to sort column ascending"
                  aria-sort="descending"
                  className="sorting sorting_desc"
                  colSpan="1"
                  rowSpan="1"
                  style={{
                    width: "103px",
                  }}
                  tabIndex="0"
                >
                  status
                </th>
                <th
                  aria-label="Actions"
                  className="sorting_disabled"
                  colSpan="1"
                  rowSpan="1"
                  style={{
                    width: "76px",
                  }}
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd">
                <td
                  className="  control"
                  style={{
                    display: "none",
                  }}
                  tabIndex="0"
                />
                <td className="  dt-checkboxes-cell">
                  <input
                    className="dt-checkboxes form-check-input"
                    type="checkbox"
                  />
                </td>
                <td className="">
                  <div className="d-flex justify-content-start align-items-center product-name">
                    <div className="avatar-wrapper">
                      <div className="avatar avatar me-2 rounded-2 bg-label-secondary">
                        <img
                          alt="Product-96"
                          className="rounded-2"
                          src="../../assets/img/ecommerce-images/product-9.png"
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-column">
                      <h6 className="text-body text-nowrap mb-0">Rixflex</h6>
                      <small className="text-muted text-truncate d-none d-sm-block">
                        Cormier-Leuschke
                      </small>
                    </div>
                  </div>
                </td>
                <td className="">
                  <span className="text-truncate d-flex align-items-center">
                    <span className="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-success me-2">
                      <i className="bx bx-briefcase" />
                    </span>
                    Office
                  </span>
                </td>
                <td>
                  <span className="text-truncate">
                    <label className="switch switch-primary switch-sm">
                      <input
                        className="switch-input"
                        id="switch"
                        type="checkbox"
                      />
                      <span className="switch-toggle-slider">
                        <span className="switch-off" />
                      </span>
                    </label>
                    <span className="d-none">Out_of_Stock</span>
                  </span>
                </td>
                <td className="">
                  <span>37038</span>
                </td>
                <td className="">
                  <span>$871.09</span>
                </td>
                <td className="">
                  <span>235</span>
                </td>
                <td className="sorting_1">
                  <span className="badge bg-label-success" text-capitalized="">
                    Publish
                  </span>
                </td>
                <td>
                  <div className="d-inline-block text-nowrap">
                    <button className="btn btn-sm btn-icon">
                      <i className="bx bx-edit" />
                    </button>
                    <button
                      className="btn btn-sm btn-icon dropdown-toggle hide-arrow"
                      data-bs-toggle="dropdown"
                    >
                      <i className="bx bx-dots-vertical-rounded me-2" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end m-0">
                      <a className="dropdown-item" href="javascript:0;">
                        View
                      </a>
                      <a className="dropdown-item" href="javascript:0;">
                        Suspend
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="row mx-2">
            <div className="col-sm-12 col-md-6">
              <div
                aria-live="polite"
                className="dataTables_info"
                id="DataTables_Table_0_info"
                role="status"
              >
                Displaying 1 to 1 of 1 entries (filtered from 100 total entries)
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div
                className="dataTables_paginate paging_simple_numbers"
                id="DataTables_Table_0_paginate"
              >
                <ul className="pagination">
                  <li
                    className="paginate_button page-item previous disabled"
                    id="DataTables_Table_0_previous"
                  >
                    <a
                      aria-controls="DataTables_Table_0"
                      aria-disabled="true"
                      className="page-link"
                      data-dt-idx="previous"
                      role="link"
                      tabIndex="-1"
                    >
                      Previous
                    </a>
                  </li>
                  <li className="paginate_button page-item active">
                    <a
                      aria-controls="DataTables_Table_0"
                      aria-current="page"
                      className="page-link"
                      data-dt-idx="0"
                      href="#"
                      role="link"
                      tabIndex="0"
                    >
                      1
                    </a>
                  </li>
                  <li
                    className="paginate_button page-item next disabled"
                    id="DataTables_Table_0_next"
                  >
                    <a
                      aria-controls="DataTables_Table_0"
                      aria-disabled="true"
                      className="page-link"
                      data-dt-idx="next"
                      role="link"
                      tabIndex="-1"
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "1%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
