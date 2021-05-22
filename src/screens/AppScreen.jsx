import React from 'react'
import { useSelector } from 'react-redux'

import NavBar from '../components/NavBar'
import FormAdd from '../components/FormAdd'

const AppScreen = () => {



    const name = useSelector(state => state.auth.displayName)

    return (
        <>
            <NavBar/>
            <div className="container">
                <h1 className="center">Hola {name}</h1>
                <hr />
                <FormAdd/>
               
            </div>
            
        </>
    )
}

export default AppScreen
