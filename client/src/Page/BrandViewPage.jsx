import React from "react";
import MasterComponent from "../Component/Shared/MasterComponent";
import BrandList from "../Component/BrandList";
import BrandAdd from "../Component/BrandAdd";

const BrandViewPage = () => {
  return (
    <MasterComponent>
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="py-3 mb-4">
          <span className="text-muted fw-light">eCommerce /</span> Category List
        </h4>
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
                <BrandList />
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
      </div>
    </MasterComponent>
  );
};

export default BrandViewPage;
