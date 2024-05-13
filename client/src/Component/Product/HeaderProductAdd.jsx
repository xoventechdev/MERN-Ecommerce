import React from "react";

const HeaderProductAdd = ({ discardBtn }) => {
  return (
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
  );
};

export default HeaderProductAdd;
