import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Page/HomePage";
import BrandViewPage from "./Page/Brand/BrandViewPage";
import BrandAddPage from "./Page/Brand/BrandAddPage";
import BrandUpdatePage from "./Page/Brand/BrandUpdatePage";
import CategoryViewPage from "./Page/Category/CategoryViewPage";
import CategoryAddPage from "./Page/Category/CategoryAddPage";
import CategoryUpdatePage from "./Page/Category/CategoryUpdatePage";
import ProductViewPage from "./Page/Product/ProductViewPage";
import ProductAddPage from "./Page/Product/ProductAddPage";
import ProductUpdatePage from "./Page/Product/ProductUpdatePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductViewPage />} />
        <Route path="/product-add" element={<ProductAddPage />} />
        <Route path="/product-update" element={<ProductUpdatePage />} />
        <Route path="/brand" element={<BrandViewPage />} />
        <Route path="/brand-add" element={<BrandAddPage />} />
        <Route path="/brand-update" element={<BrandUpdatePage />} />
        <Route path="/category" element={<CategoryViewPage />} />
        <Route path="/category-add" element={<CategoryAddPage />} />
        <Route path="/category-update" element={<CategoryUpdatePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
