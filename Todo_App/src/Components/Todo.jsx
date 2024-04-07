import React, { useEffect, useState } from 'react'

import { TodoItem } from './TodoItem'
import axios from "axios"
export const Todo = () => {
 const [allTodo, setAllTodo]=useState([])

 
const fetchData= async ()=>{
  try {
    const {data}= await axios({
    method:"GET",
    url:"http://localhost:3000/todos",
  })
  setAllTodo(data)
  } catch (error) {
    console.log(error);
  }
  
}
useEffect(()=> {
  fetchData()
 },[])

  return (
    <>
    {allTodo.map((ele)=> <TodoItem key={ele.id} {...ele}/>)}
    
    
    </>
  )
}
