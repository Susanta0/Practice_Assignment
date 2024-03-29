import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { ProductPage } from "../Pages/ProductPage";
import { Products } from "../Pages/Products";
import { PrivetRoute } from "./PrivetRoute";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivetRoute>
            <Home />
          </PrivetRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/products"
        element={
          <PrivetRoute>
            <Products />
          </PrivetRoute>
        }
      />
      <Route
        path="/products/:product_id"
        element={
          <PrivetRoute>
            <ProductPage />
          </PrivetRoute>
        }
      />
    </Routes>
  );
};
