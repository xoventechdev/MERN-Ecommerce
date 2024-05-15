import React, { useEffect, useState } from "react";
import "datatables.net-bs5";
import { getProductList, deleteProduct } from "../../Utility/APIHelper";
import { Link } from "react-router-dom";
import { ErrorDex, SuccessDex } from "../../Utility/AdditionalServices";

const ProductList = () => {
  const [product, setProduct] = useState([]);
  const [isDelete, setDelete] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getProduct();
  }, [isDelete]);

  const getProduct = async () => {
    const data = await getProductList();
    setProduct(data.response);
  };

  const DeleteProduct = async (id) => {
    console.log(id);
    const res = await deleteProduct(id);
    console.log(res);
    if (res.status == "success") {
      SuccessDex(res.response);
      setDelete(!isDelete);
    } else {
      ErrorDex(res.response);
    }
  };

  const filteredProduct = product.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedProduct = filteredProduct.sort((a, b) => {
    if (sortDirection === "asc") {
      return a[sortColumn] < b[sortColumn] ? -1 : 1;
    } else {
      return a[sortColumn] > b[sortColumn] ? -1 : 1;
    }
  });

  const getHeaderClassName = (column) => {
    if (sortColumn === column) {
      return `sorting sorting_${sortDirection}`;
    } else {
      return "sorting";
    }
  };

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
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                    }}
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
                  onClick={() => handleSort("title")}
                  className={getHeaderClassName("title")}
                  aria-controls="DataTables_Table_0"
                  aria-label="product: activate to sort column ascending"
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
                  onClick={() => handleSort("category")}
                  className={getHeaderClassName("category")}
                  aria-controls="DataTables_Table_0"
                  aria-label="category: activate to sort column ascending"
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
                  onClick={() => handleSort("stock")}
                  className={getHeaderClassName("stock")}
                  aria-controls="DataTables_Table_0"
                  colSpan="1"
                  rowSpan="1"
                  aria-label="stock"
                  style={{
                    width: "60px",
                  }}
                >
                  stock
                </th>

                <th
                  onClick={() => handleSort("price")}
                  className={getHeaderClassName("price")}
                  aria-controls="DataTables_Table_0"
                  aria-label="price: activate to sort column ascending"
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
                  onClick={() => handleSort("quantity")}
                  className={getHeaderClassName("quantity")}
                  aria-controls="DataTables_Table_0"
                  aria-label="qty: activate to sort column ascending"
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
                  onClick={() => handleSort("isPublished")}
                  className={getHeaderClassName("isPublished")}
                  aria-controls="DataTables_Table_0"
                  aria-label="status: activate to sort column ascending"
                  aria-sort="descending"
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
              {filteredProduct.map((item) => {
                return (
                  <tr key={item._id} className="odd">
                    <td className="">
                      <div className="d-flex justify-content-start align-items-center product-name">
                        <div className="avatar-wrapper">
                          <div className="avatar avatar me-2 rounded-2 bg-label-secondary">
                            <img
                              alt="Product-96"
                              className="rounded-2"
                              src={item.image}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-column">
                          <h6 className="text-body text-nowrap mb-0">
                            {item.title}
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td className="">
                      <span className="text-truncate d-flex align-items-center">
                        <span className="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-success me-2">
                          <i className="bx bx-briefcase" />
                        </span>
                        {item.category}
                      </span>
                    </td>
                    <td>
                      <span className="text-truncate">
                        <label className="switch switch-primary switch-sm">
                          <input
                            type="checkbox"
                            name="stock"
                            className="switch-input"
                            value={item.stock}
                            checked={item.stock}
                          />
                          <span className="switch-toggle-slider">
                            <span className="switch-on">
                              <span className="switch-off" />
                            </span>
                          </span>
                        </label>
                        <span className="d-none">Out_of_Stock</span>
                      </span>
                    </td>
                    <td className="">
                      <span>৳ {item.price}</span>
                    </td>
                    <td className="">
                      <span>{item.quantity}</span>
                    </td>
                    <td className="sorting_1">
                      <span
                        className="badge bg-label-success"
                        text-capitalized=""
                      >
                        {item.isPublished ? "published" : "Unpublished"}
                      </span>
                    </td>
                    <td>
                      <div className="d-inline-block text-nowrap">
                        <Link
                          to={`/product/${item._id}`}
                          className="btn btn-sm btn-icon"
                        >
                          <i className="bx bx-trending-up" />
                        </Link>
                        <Link
                          to={`/product-update/${item._id}`}
                          className="btn btn-sm btn-icon"
                        >
                          <i className="bx bx-edit" />
                        </Link>
                        <button
                          onClick={() => DeleteProduct(item._id)}
                          className="btn btn-sm btn-icon"
                        >
                          <i className="bx bx-trash" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
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
