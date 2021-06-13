import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { emailAndPasswordlogin, googleLogin } from '../actions/auth'
import GoogleButton from 'react-google-button'

const LoginScreen = () => {

    const [data, setData] = useState({
        email:'',
        username:''
    })

    const {email, password} = data

    const handleChange = (e) =>{
       const value = e.target.value
       setData({
        ...data,
        [e.target.name]: value
     })
    }

    const  dispatch = useDispatch()

    const handleGoogleLogin = ()=>{
        dispatch(googleLogin())
    }
    const handleEmailLogin = (e)=>{
        e.preventDefault()
        if(!email.trim() || !email.trim().includes('@')){
            return
        }
        if (password.trim().length<6){
            return
        }
        dispatch(emailAndPasswordlogin(email, password))
    }

    return (
        <div className="container animate__animated animate__zoomIn" style={{justifyContent:'space-around'}}>
            <h3>Iniciar Sesión</h3>
            <hr />
            <div className="row container">
                <form onSubmit={handleEmailLogin} className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">email</i>
                            <input 
                            onChange={handleChange}
                            name='email'
                            value={email}
                            id="icon_prefix1" className="materialize-textarea"
                            type='email'
                            />
                            <label htmlFor="icon_prefix1">Email</label>
                        </div>
                    </div>
                    <div className="row">
                            <div className="input-field col s12">
                            <i className="material-icons prefix">password</i>
                            <input 
                            onChange={handleChange}
                            name='password'
                            value={password}
                            id="icon_prefix2" className="materialize-textarea"
                            type='password'
                            />
                            <label htmlFor="icon_prefix2">Contraseña</label>
                        </div>
                    </div>
                    <button className='waves-effect waves-light btn ' type="submit">Enviar</button>
                <hr />
                <GoogleButton
                onClick={handleGoogleLogin}
                />
                <hr />
                <Link to='/auth/register'>Registrarse en el sitio</Link>
                </form>
            </div>
        </div>
    )
}

export default LoginScreen
