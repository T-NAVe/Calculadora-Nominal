import React from 'react'
import {Route, Redirect} from 'react-router-dom'


const PublicRouter = ({logged, component: Component, ...rest}) => {
    return (
        <Route 
        {...rest}
        component={(props)=>
            logged ? <Redirect to="/"/>:<Component {...props}/>}/>

    )
}

export default PublicRouter
