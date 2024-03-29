import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import { Navigate } from 'react-router-dom'

export const PrivetRoute = ({children}) => {
    const {authState:{isAuth}} = useContext(AuthContext)
    if(!isAuth){
        return <Navigate to="/login"/>
    }
    return children
}
