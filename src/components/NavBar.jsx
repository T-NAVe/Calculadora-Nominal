import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../actions/auth'
import { limpiar } from '../actions/nomina'

const NavBar = () => {
    const dispatch = useDispatch()
    const handleLogOut = ()=>{
        dispatch(limpiar())
        dispatch(logout())
    }
    return (
        <nav className="purple">
        <div className="nav-wrapper">
          <span className="brand-logo">Calculadora nominal</span>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><button onClick={handleLogOut} className="btn waves-effect waves-light purple lighten-2">Cerrar Sesión</button></li>
          </ul>
        </div>
      </nav>
    )
}

export default NavBar
