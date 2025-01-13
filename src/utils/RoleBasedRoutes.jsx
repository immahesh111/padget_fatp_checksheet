import React from 'react'
import {useAuth} from '../context/authContext'
import {Navigate} from 'react-router-dom'

const RoleBasedRoutes = ({children}) => {
    const {user, loading} = useAuth()

    if(loading){
        return <div>Loading ...</div>
    }

    if(user?.role !== "admin"){
        return <Navigate to="/unauthorized"/>
    }

    return children
}

export default RoleBasedRoutes