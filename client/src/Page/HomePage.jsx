import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MasterComponent from "../Component/Shared/MasterComponent";
import { getBrandList } from "../Utility/APIHelper";
import axios from "axios";

const HomePage = () => {
  const [Category, setCategory] = useState(null);
  useEffect(() => {
    callCategory();
  }, []);

  const callCategory = async () => {
    const data = await getBrandList();
    setCategory(data);
  };

  return (
    <MasterComponent>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Home Page</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Link to="/product">Product</Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Link to="/product-add">Product Add</Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Link to="/brand">Brand</Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Link to="/category">Category</Link>
          </div>
        </div>
      </div>
    </MasterComponent>
  );
};

export default HomePage;
