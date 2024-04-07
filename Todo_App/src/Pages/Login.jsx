import React, { useContext, useReducer } from 'react'
import { Button, Wrap, WrapItem, Avatar, Input } from '@chakra-ui/react'
import axios from "axios"
import { Loading } from '../Components/Loading'
import {Error} from "../Components/Error"
import { AuthContext } from '../Context/AuthContextProvaider'
import { useNavigate } from 'react-router-dom'
import { useToast } from "@chakra-ui/react";

const reducer=(preState,{type,payload})=>{
  switch(type){
    case "email":
      return {...preState, email:payload}
    case "password":
      return{...preState, password:payload}
    case "loading":
      return{...preState, loading:true}
      case "error":
        return{...preState, error:true, loading:false}
      case "success":
        return{...preState, loading:false, error:false}
    case "reset":{
      return{...preState,email:"", password:""}
    }
    default:
      return preState
  }
}

export const Login = () => {
  const [state, dispatch]= useReducer(reducer, {
    email:"",
  password:"",
  loading:false,
  error:false
  })
  const {login} = useContext(AuthContext)
  const navigate=useNavigate()
  const toast=useToast()

  const handleChange=(e)=>{
    const{name, value}=e.target
    dispatch({
      type:name,
      payload:value
    })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    dispatch({type:"loading"})
    try {
      const {data}= await axios({
        method:"POST",
        url:"https://reqres.in/api/login",
        headers: {
          "Content-Type":"application/json"
        },
        data:{email, password}
      })
      dispatch({type:"success"})
      login(data.token)
      dispatch({type:"reset"})
      navigate(`/`)
      toast({
        title: "Successfully Logged In",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      console.log(data);
    } catch (error) {
      dispatch({type:"error"})
      dispatch({type:"reset"})
      toast({
        title: "Please Enter Valid Credentails",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      console.log(error)
    }

   
  }
  const {loading, error,email, password}=state
if(loading){
 return <Loading/>
}
if(error){
  return <Error/>
}
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <Wrap className='flex justify-center'>
  <WrapItem>
    <Avatar size='2xl' name='Avatar' src='https://storage.googleapis.com/pai-images/ceccb24f18a544c2a7722a4eedd5446f.jpeg' />{' '}
  </WrapItem>
</Wrap>
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <Input
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="text-sm">
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <Input
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <Button
          type='submit'
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </Button>
        </div>
      </form>
    </div>
  </div>
  )
}