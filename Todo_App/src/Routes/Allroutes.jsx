import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { TodosDashboard } from "../Pages/TodosDashboard";
import { AddTodo,} from "../Pages/AddTodo";
import { Contact } from "../Pages/Contact";
import { Login } from "../Pages/Login";
import { PrivetRoute } from "../Components/PrivetRoute";
export const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/todosdashboard"
          element={
            <PrivetRoute>
              <TodosDashboard />
            </PrivetRoute>
          }
        />
        <Route
          path="/addtodo"
          element={
            <PrivetRoute>
              <AddTodo />
            </PrivetRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <PrivetRoute>
              <Contact />
            </PrivetRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
