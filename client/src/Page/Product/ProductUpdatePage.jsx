import React from "react";
import MasterComponent from "../../Component/Shared/MasterComponent";
import ProductForm from "../../Component/Product/ProductForm";

const ProductUpdatePage = () => {
  const isUpdate = true;
  return (
    <MasterComponent>
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="py-3 mb-4">
          <span className="text-muted fw-light">eCommerce /</span> Product
          Update
        </h4>
        <ProductForm isUpdate={isUpdate} />
      </div>
    </MasterComponent>
  );
};

export default ProductUpdatePage;
