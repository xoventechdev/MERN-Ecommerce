import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Page/HomePage";
import BrandViewPage from "./Page/BrandViewPage";
import BrandAddPage from "./Page/BrandAddPage";
import BrandUpdatePage from "./Page/BrandUpdatePage";
import CategoryViewPage from "./Page/CategoryViewPage";
import CategoryAddPage from "./Page/CategoryAddPage";
import CategoryUpdatePage from "./Page/CategoryUpdatePage";
import ProductViewPage from "./Page/ProductViewPage";
import ProductAddPage from "./Page/ProductAddPage";
import ProductUpdatePage from "./Page/ProductUpdatePage";

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
