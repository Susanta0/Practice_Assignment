import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { Loading } from "../Components/Loading";
import { Error } from "../Components/Error";
import { ProductCard } from "../Components/ProductCard";
import { useSearchParams } from "react-router-dom";
import { Box, Select } from "@chakra-ui/react";
const reducer = (preState, { type, payload }) => {
  switch (type) {
    case "LOADING":
      return { ...preState, loading: true, error: false };
    case "ERROR":
      return { ...preState, loading: false, error: true };
    case "SUCCESS":
      return { ...preState, loading: false, error: false, data: payload };
    default:
      return preState;
  }
};
export const Products = () => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    error: false,
    data: [],
  });
  const [searchParam, setSearchParam] = useSearchParams();
  const [category, setCategory] = useState(searchParam.get("category")||"all");

  const { loading, error, data } = state;

  useEffect(() => {
    setSearchParam((prevSearchParam)=>{
      const newSearchParam= new URLSearchParams(prevSearchParam)
      newSearchParam.set("category", category)
      return newSearchParam
    })
    fetchData(category);
  }, [category]);

  const fetchData = async () => {
    const categoryObj ={}
    if(category !== "all"){
      categoryObj["category"]=category
    }
    dispatch({ type: "LOADING" });
    try {
      const { data } = await axios({
        method: "GET",
        baseURL: import.meta.env.VITE_BASE_URL,
        url: "/products",
        headers: { "Content-Type": "application/json" },
        params: categoryObj
      });
      console.log(data);
      dispatch({ type: "SUCCESS", payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: "ERROR" });
    }
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <div className="bg-white border">
      <Box className="flex justify-start ml-36 mt-1">
        <Select w={200} value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All Category</option>
        <option value="men's clothing">Men Clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
        <option value="women's clothing">Women's Clothing</option>
      </Select>
      </Box>
      
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((ele) => (
            <ProductCard key={ele.id} {...ele} />
          ))}
        </div>
      </div>
    </div>
  );
};
