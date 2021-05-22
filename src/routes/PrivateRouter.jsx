import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const PrivateRouter = ({logged, component: Component, ...rest}) => {
    return (
        
        <Route 
        {...rest} 
        component={(props)=>
            logged ? <Component {...props}/>:<Redirect to="/auth/login"/>}/>
    )
}

export default PrivateRouter
