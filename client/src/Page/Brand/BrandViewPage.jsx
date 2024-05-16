import React from "react";
import MasterComponent from "../../Component/Shared/MasterComponent";
import BrandList from "../../Component/Brand/BrandList";

const BrandViewPage = () => {
  return (
    <MasterComponent>
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="py-3 mb-4">
          Brand List
        </h4>
        <BrandList />
      </div>
    </MasterComponent>
  );
};

export default BrandViewPage;
