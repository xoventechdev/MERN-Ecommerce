import React from "react";

import BrandAdd from "../Component/BrandAdd";

const BrandList = () => {
  return (
    <div className="app-ecommerce-category">
      {/* Category List Table */}
      <div className="card">
        <div className="card-datatable table-responsive">
          <div
            id="DataTables_Table_0_wrapper"
            className="dataTables_wrapper dt-bootstrap5 no-footer"
          >
            <div className="card-header d-flex flex-wrap py-0">
              <div className="me-5 ms-n2 pe-5">
                <div
                  id="DataTables_Table_0_filter"
                  className="dataTables_filter"
                >
                  <label>
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search Category"
                      aria-controls="DataTables_Table_0"
                    />
                  </label>
                </div>
              </div>
              <div className="d-flex justify-content-start justify-content-md-end align-items-baseline">
                <div className="dt-action-buttons d-flex align-items-start align-items-md-center justify-content-sm-center mb-3 mb-sm-0 gap-3 pt-0">
                  <div
                    className="dataTables_length mt-0 mt-md-3"
                    id="DataTables_Table_0_length"
                  >
                    <label>
                      <select
                        name="DataTables_Table_0_length"
                        aria-controls="DataTables_Table_0"
                        className="form-select"
                      >
                        <option value={7}>7</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                        <option value={70}>70</option>
                        <option value={100}>100</option>
                      </select>
                    </label>
                  </div>
                  <div className="dt-buttons btn-group flex-wrap">
                    <button
                      className="btn btn-secondary add-new btn-primary ms-2"
                      tabIndex={0}
                      aria-controls="DataTables_Table_0"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasEcommerceCategoryList"
                    >
                      <span>
                        <i className="bx bx-plus me-0 me-sm-1" />
                        Add Category
                      </span>
                    </button>{" "}
                  </div>
                </div>
              </div>
            </div>
            <table
              className="datatables-category-list table border-top dataTable no-footer dtr-column"
              id="DataTables_Table_0"
              aria-describedby="DataTables_Table_0_info"
              style={{ width: 1390 }}
            >
              <thead>
                <tr>
                  <th
                    className="control sorting_disabled dtr-hidden"
                    rowSpan={1}
                    colSpan={1}
                    style={{ width: 0, display: "none" }}
                    aria-label=""
                  />
                  <th
                    className="sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all"
                    rowSpan={1}
                    colSpan={1}
                    style={{ width: 18 }}
                    data-col={1}
                    aria-label=""
                  >
                    <input type="checkbox" className="form-check-input" />
                  </th>
                  <th
                    className="sorting sorting_desc"
                    tabIndex={0}
                    aria-controls="DataTables_Table_0"
                    rowSpan={1}
                    colSpan={1}
                    style={{ width: 678 }}
                    aria-label="Categories: activate to sort column ascending"
                    aria-sort="descending"
                  >
                    Categories
                  </th>
                  <th
                    className="text-nowrap text-sm-end sorting"
                    tabIndex={0}
                    aria-controls="DataTables_Table_0"
                    rowSpan={1}
                    colSpan={1}
                    style={{ width: 201 }}
                    aria-label="Total Products &nbsp;: activate to sort column ascending"
                  >
                    Total Products &nbsp;
                  </th>
                  <th
                    className="text-nowrap text-sm-end sorting_disabled"
                    rowSpan={1}
                    colSpan={1}
                    style={{ width: 172 }}
                    aria-label="Total Earning"
                  >
                    Total Earning
                  </th>
                  <th
                    className="text-lg-center sorting_disabled"
                    rowSpan={1}
                    colSpan={1}
                    style={{ width: 113 }}
                    aria-label="Actions"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd">
                  <td
                    className="  control"
                    tabIndex={0}
                    style={{ display: "none" }}
                  />
                  <td className="  dt-checkboxes-cell">
                    <input
                      type="checkbox"
                      className="dt-checkboxes form-check-input"
                    />
                  </td>
                  <td className="sorting_1">
                    <div className="d-flex align-items-center">
                      <div className="avatar-wrapper me-2 rounded-2 bg-label-secondary">
                        <div className="avatar">
                          <img
                            src="../../assets/img/ecommerce-images/product-16.png"
                            alt="Product-8"
                            className="rounded-2"
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <span className="text-body text-wrap fw-medium">
                          Travel
                        </span>
                        <span className="text-muted text-truncate mb-0 d-none d-sm-block">
                          <small>
                            Choose from wide range of travel accessories from
                            popular brands
                          </small>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-sm-end">4186</div>
                  </td>
                  <td>
                    <div className="fw-medium text-sm-end">$7912.99</div>
                  </td>
                  <td>
                    <div className="d-flex align-items-sm-center justify-content-sm-center">
                      <button className="btn btn-sm btn-icon delete-record me-2">
                        <i className="bx bx-trash" />
                      </button>
                      <button className="btn btn-sm btn-icon">
                        <i className="bx bx-edit" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="even">
                  <td
                    className="  control"
                    tabIndex={0}
                    style={{ display: "none" }}
                  />
                  <td className="  dt-checkboxes-cell">
                    <input
                      type="checkbox"
                      className="dt-checkboxes form-check-input"
                    />
                  </td>
                  <td className="sorting_1">
                    <div className="d-flex align-items-center">
                      <div className="avatar-wrapper me-2 rounded-2 bg-label-secondary">
                        <div className="avatar">
                          <img
                            src="../../assets/img/ecommerce-images/product-1.png"
                            alt="Product-1"
                            className="rounded-2"
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <span className="text-body text-wrap fw-medium">
                          Smart Phone
                        </span>
                        <span className="text-muted text-truncate mb-0 d-none d-sm-block">
                          <small>
                            Choose from wide range of smartphones from popular
                            brands
                          </small>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-sm-end">1947</div>
                  </td>
                  <td>
                    <div className="fw-medium text-sm-end">$99129</div>
                  </td>
                  <td>
                    <div className="d-flex align-items-sm-center justify-content-sm-center">
                      <button className="btn btn-sm btn-icon delete-record me-2">
                        <i className="bx bx-trash" />
                      </button>
                      <button className="btn btn-sm btn-icon">
                        <i className="bx bx-edit" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="odd">
                  <td
                    className="  control"
                    tabIndex={0}
                    style={{ display: "none" }}
                  />
                  <td className="  dt-checkboxes-cell">
                    <input
                      type="checkbox"
                      className="dt-checkboxes form-check-input"
                    />
                  </td>
                  <td className="sorting_1">
                    <div className="d-flex align-items-center">
                      <div className="avatar-wrapper me-2 rounded-2 bg-label-secondary">
                        <div className="avatar">
                          <img
                            src="../../assets/img/ecommerce-images/product-4.png"
                            alt="Product-4"
                            className="rounded-2"
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <span className="text-body text-wrap fw-medium">
                          Shoes
                        </span>
                        <span className="text-muted text-truncate mb-0 d-none d-sm-block">
                          <small>
                            Explore the latest shoes from Top brands
                          </small>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-sm-end">4940</div>
                  </td>
                  <td>
                    <div className="fw-medium text-sm-end">$3612.98</div>
                  </td>
                  <td>
                    <div className="d-flex align-items-sm-center justify-content-sm-center">
                      <button className="btn btn-sm btn-icon delete-record me-2">
                        <i className="bx bx-trash" />
                      </button>
                      <button className="btn btn-sm btn-icon">
                        <i className="bx bx-edit" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="even">
                  <td
                    className="  control"
                    tabIndex={0}
                    style={{ display: "none" }}
                  />
                  <td className="  dt-checkboxes-cell">
                    <input
                      type="checkbox"
                      className="dt-checkboxes form-check-input"
                    />
                  </td>
                  <td className="sorting_1">
                    <div className="d-flex align-items-center">
                      <div className="avatar-wrapper me-2 rounded-2 bg-label-secondary">
                        <div className="avatar">
                          <img
                            src="../../assets/img/ecommerce-images/product-22.png"
                            alt="Product-10"
                            className="rounded-2"
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <span className="text-body text-wrap fw-medium">
                          Jewellery
                        </span>
                        <span className="text-muted text-truncate mb-0 d-none d-sm-block">
                          <small>
                            Choose from wide range of Jewellery from popular
                            brands
                          </small>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-sm-end">4186</div>
                  </td>
                  <td>
                    <div className="fw-medium text-sm-end">$7912.99</div>
                  </td>
                  <td>
                    <div className="d-flex align-items-sm-center justify-content-sm-center">
                      <button className="btn btn-sm btn-icon delete-record me-2">
                        <i className="bx bx-trash" />
                      </button>
                      <button className="btn btn-sm btn-icon">
                        <i className="bx bx-edit" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="odd">
                  <td
                    className="  control"
                    tabIndex={0}
                    style={{ display: "none" }}
                  />
                  <td className="  dt-checkboxes-cell">
                    <input
                      type="checkbox"
                      className="dt-checkboxes form-check-input"
                    />
                  </td>
                  <td className="sorting_1">
                    <div className="d-flex align-items-center">
                      <div className="avatar-wrapper me-2 rounded-2 bg-label-secondary">
                        <div className="avatar">
                          <img
                            src="../../assets/img/ecommerce-images/product-10.png"
                            alt="Product-7"
                            className="rounded-2"
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <span className="text-body text-wrap fw-medium">
                          Home Decor
                        </span>
                        <span className="text-muted text-truncate mb-0 d-none d-sm-block">
                          <small>
                            Choose from wide range of home decor from popular
                            brands
                          </small>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-sm-end">9184</div>
                  </td>
                  <td>
                    <div className="fw-medium text-sm-end">$19120.45</div>
                  </td>
                  <td>
                    <div className="d-flex align-items-sm-center justify-content-sm-center">
                      <button className="btn btn-sm btn-icon delete-record me-2">
                        <i className="bx bx-trash" />
                      </button>
                      <button className="btn btn-sm btn-icon">
                        <i className="bx bx-edit" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="even">
                  <td
                    className="  control"
                    tabIndex={0}
                    style={{ display: "none" }}
                  />
                  <td className="  dt-checkboxes-cell">
                    <input
                      type="checkbox"
                      className="dt-checkboxes form-check-input"
                    />
                  </td>
                  <td className="sorting_1">
                    <div className="d-flex align-items-center">
                      <div className="avatar-wrapper me-2 rounded-2 bg-label-secondary">
                        <div className="avatar">
                          <img
                            src="../../assets/img/ecommerce-images/product-23.png"
                            alt="Product-11"
                            className="rounded-2"
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <span className="text-body text-wrap fw-medium">
                          Grocery
                        </span>
                        <span className="text-muted text-truncate mb-0 d-none d-sm-block">
                          <small>
                            Get fresh groceries delivered at your doorstep
                          </small>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-sm-end">4186</div>
                  </td>
                  <td>
                    <div className="fw-medium text-sm-end">$7912.99</div>
                  </td>
                  <td>
                    <div className="d-flex align-items-sm-center justify-content-sm-center">
                      <button className="btn btn-sm btn-icon delete-record me-2">
                        <i className="bx bx-trash" />
                      </button>
                      <button className="btn btn-sm btn-icon">
                        <i className="bx bx-edit" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="odd">
                  <td
                    className="  control"
                    tabIndex={0}
                    style={{ display: "none" }}
                  />
                  <td className="  dt-checkboxes-cell">
                    <input
                      type="checkbox"
                      className="dt-checkboxes form-check-input"
                    />
                  </td>
                  <td className="sorting_1">
                    <div className="d-flex align-items-center">
                      <div className="avatar-wrapper me-2 rounded-2 bg-label-secondary">
                        <div className="avatar">
                          <img
                            src="../../assets/img/ecommerce-images/product-6.png"
                            alt="Product-6"
                            className="rounded-2"
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <span className="text-body text-wrap fw-medium">
                          Games
                        </span>
                        <span className="text-muted text-truncate mb-0 d-none d-sm-block">
                          <small>
                            Dive into world of Virtual Reality with latest games
                          </small>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-sm-end">5764</div>
                  </td>
                  <td>
                    <div className="fw-medium text-sm-end">$29129</div>
                  </td>
                  <td>
                    <div className="d-flex align-items-sm-center justify-content-sm-center">
                      <button className="btn btn-sm btn-icon delete-record me-2">
                        <i className="bx bx-trash" />
                      </button>
                      <button className="btn btn-sm btn-icon">
                        <i className="bx bx-edit" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="row mx-2">
              <div className="col-sm-12 col-md-6">
                <div
                  className="dataTables_info"
                  id="DataTables_Table_0_info"
                  role="status"
                  aria-live="polite"
                >
                  Showing 1 to 7 of 14 entries
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
                        role="link"
                        data-dt-idx="previous"
                        tabIndex={-1}
                        className="page-link"
                      >
                        Previous
                      </a>
                    </li>
                    <li className="paginate_button page-item active">
                      <a
                        href="#"
                        aria-controls="DataTables_Table_0"
                        role="link"
                        aria-current="page"
                        data-dt-idx={0}
                        tabIndex={0}
                        className="page-link"
                      >
                        1
                      </a>
                    </li>
                    <li className="paginate_button page-item ">
                      <a
                        href="#"
                        aria-controls="DataTables_Table_0"
                        role="link"
                        data-dt-idx={1}
                        tabIndex={0}
                        className="page-link"
                      >
                        2
                      </a>
                    </li>
                    <li
                      className="paginate_button page-item next"
                      id="DataTables_Table_0_next"
                    >
                      <a
                        href="#"
                        aria-controls="DataTables_Table_0"
                        role="link"
                        data-dt-idx="next"
                        tabIndex={0}
                        className="page-link"
                      >
                        Next
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div style={{ width: "1%" }} />
          </div>
        </div>
      </div>
      <BrandAdd />
    </div>
  );
};

export default BrandList;
