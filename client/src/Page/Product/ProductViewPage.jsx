import React from "react";
import MasterComponent from "../../Component/Shared/MasterComponent";
import ProductList from "../../Component/Product/ProductList";

const ProductViewPage = () => {
  return (
    <MasterComponent>
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="py-3 mb-4">
          Product List
        </h4>
        <ProductList />
      </div>
    </MasterComponent>
  );
};

export default ProductViewPage;
