import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'

export const Home = () => {
  const{state}=useContext(AuthContext)
  return (
    <div>Home</div>
  )
}
