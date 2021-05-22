import React from 'react'
import {Route} from 'react-router-dom'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'

const AuthRouter = () => {



    return (
            <>
                <Route exact path='/auth/login' component={LoginScreen}/>
                <Route exact path='/auth/register' component={RegisterScreen}/>
                {/* <Redirect to='/auth/login'/> */}
            </>
    )
}

export default AuthRouter
