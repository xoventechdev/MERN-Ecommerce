import React from "react";

const BrandList = () => {
  return (
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
          <td className="  control" tabIndex={0} style={{ display: "none" }} />
          <td className="  dt-checkboxes-cell">
            <input type="checkbox" className="dt-checkboxes form-check-input" />
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
                <span className="text-body text-wrap fw-medium">Travel</span>
                <span className="text-muted text-truncate mb-0 d-none d-sm-block">
                  <small>
                    Choose from wide range of travel accessories from popular
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
        <tr className="even">
          <td className="  control" tabIndex={0} style={{ display: "none" }} />
          <td className="  dt-checkboxes-cell">
            <input type="checkbox" className="dt-checkboxes form-check-input" />
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
                    Choose from wide range of smartphones from popular brands
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
          <td className="  control" tabIndex={0} style={{ display: "none" }} />
          <td className="  dt-checkboxes-cell">
            <input type="checkbox" className="dt-checkboxes form-check-input" />
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
                <span className="text-body text-wrap fw-medium">Shoes</span>
                <span className="text-muted text-truncate mb-0 d-none d-sm-block">
                  <small>Explore the latest shoes from Top brands</small>
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
          <td className="  control" tabIndex={0} style={{ display: "none" }} />
          <td className="  dt-checkboxes-cell">
            <input type="checkbox" className="dt-checkboxes form-check-input" />
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
                <span className="text-body text-wrap fw-medium">Jewellery</span>
                <span className="text-muted text-truncate mb-0 d-none d-sm-block">
                  <small>
                    Choose from wide range of Jewellery from popular brands
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
          <td className="  control" tabIndex={0} style={{ display: "none" }} />
          <td className="  dt-checkboxes-cell">
            <input type="checkbox" className="dt-checkboxes form-check-input" />
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
                    Choose from wide range of home decor from popular brands
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
          <td className="  control" tabIndex={0} style={{ display: "none" }} />
          <td className="  dt-checkboxes-cell">
            <input type="checkbox" className="dt-checkboxes form-check-input" />
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
                <span className="text-body text-wrap fw-medium">Grocery</span>
                <span className="text-muted text-truncate mb-0 d-none d-sm-block">
                  <small>Get fresh groceries delivered at your doorstep</small>
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
          <td className="  control" tabIndex={0} style={{ display: "none" }} />
          <td className="  dt-checkboxes-cell">
            <input type="checkbox" className="dt-checkboxes form-check-input" />
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
                <span className="text-body text-wrap fw-medium">Games</span>
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
  );
};

export default BrandList;
