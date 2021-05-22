import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {firebase} from '../firebase/configFirebase'
import {Switch, BrowserRouter as Router} from 'react-router-dom'
import AppScreen from '../screens/AppScreen'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'
import { login } from '../actions/auth'
import AuthRouter from './AuthRouter'
import { loadData } from '../helpers/loadData'


const AppRouter = () => {

    const dispatch = useDispatch()

    const [logged, setLogged] = useState(false)

    useEffect(() => {
        
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                dispatch(login(user.uid, user.displayName))
                setLogged(true);

                loadData(user.uid)
            }else{
                setLogged(false)
            }         
        })
    }, [dispatch])

    return (
        <Router>
            <Switch>
                <PublicRouter path='/auth' logged={logged} component={AuthRouter}/>
                {/* <Route path="/auth" component={AuthRouter}/> */}
                <PrivateRouter exact path='/' logged={logged} component={AppScreen}/>
                
            </Switch>
        </Router>
    )
}

export default AppRouter
