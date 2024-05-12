import React, { useEffect, useState } from "react";
import MasterComponent from "../../Component/Shared/MasterComponent";
import ProductForm from "../../Component/Product/ProductForm";

const ProductAddPage = () => {
  return (
    <MasterComponent>
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="py-3 mb-4">
          <span className="text-muted fw-light">eCommerce /</span> Add Product
        </h4>
        <ProductForm />
      </div>
    </MasterComponent>
  );
};

export default ProductAddPage;
