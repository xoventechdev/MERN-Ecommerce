import React from "react";
import MasterComponent from "../../Component/Shared/MasterComponent";
import ProductForm from "../../Component/Product/ProductForm";

const ProductUpdatePage = () => {
  return (
    <MasterComponent>
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="py-3 mb-4">
          <span className="text-muted fw-light">eCommerce /</span> Product
          Update
        </h4>
        <ProductForm />
      </div>
    </MasterComponent>
  );
};

export default ProductUpdatePage;
