import React from "react";
import { Link } from "react-router-dom";

const HeaderProductUpdate = () => {
  return (
    <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
      <div className="d-flex flex-column justify-content-center">
        <h4 className="mb-1 mt-3">Update the Product</h4>
        <p className="text-muted">Orders placed across your store</p>
      </div>
      <div className="d-flex align-content-center flex-wrap gap-3">
        <Link to="/product" className="btn btn-label-secondary">
          View ProductList
        </Link>
        <button type="submit" className="btn btn-primary">
          Update product
        </button>
      </div>
    </div>
  );
};

export default HeaderProductUpdate;
