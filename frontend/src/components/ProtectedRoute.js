import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom"

function ProtectedRoute({component:Component, ...restOfProps}) {
    
    const userInfo = useSelector(state => state.user)
    useEffect(() => {
        console.log(userInfo)
    }, [userInfo])
    
    

    return (
        <Route {...restOfProps} render={(props)=>
            userInfo.data ? <Component {...props} /> : <Redirect to="/" /> 
        }/>
    )
}

export default ProtectedRoute
