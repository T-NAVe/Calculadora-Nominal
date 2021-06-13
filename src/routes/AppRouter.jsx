import React, {  useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {firebase} from '../firebase/configFirebase'
import {Switch, BrowserRouter as Router} from 'react-router-dom'
import AppScreen from '../screens/AppScreen'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'
import { login } from '../actions/auth'
import AuthRouter from './AuthRouter'
import { loadData } from '../helpers/loadData'
import { leerRegistros } from '../actions/nomina'


const AppRouter = () => {
    const [logged, setLogged] = useState(false)
    const dispatch = useDispatch()

    

    useEffect(() => {
        
        firebase.auth().onAuthStateChanged(async (user)=>{
            if(user){
                dispatch(login(user.uid, user.displayName))
                setLogged(true);

               const nominaData = await loadData(user.uid)
               dispatch(leerRegistros(nominaData)) 
            }else{
                setLogged(false)
            }         
        })
    }, [dispatch])

    return (
        <Router>
            <Switch>
                <PublicRouter path='/auth' logged={logged} component={AuthRouter}/>
                <PrivateRouter exact path='/' logged={logged} component={AppScreen}/>
                
            </Switch>
        </Router>
    )
}

export default AppRouter
