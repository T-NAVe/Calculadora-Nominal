import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { register } from '../actions/auth'

const RegisterScreen = () => {

    const dispatch = useDispatch()

    const [data, setData] = useState({
        email:'',
        username:'',
        password:'',
        confirmPassword:''
    })

    const {email, username, password,confirmPassword} = data

    const handleChange = (e) =>{
       const value = e.target.value
       setData({
        ...data,
        [e.target.name]: value
     })
    }

    const handleRegister = (e)=>{
        e.preventDefault()
        if(!email.trim() || !email.trim().includes('@')){
            return
        }
        if(username.trim().length < 2 || username.trim().length > 15){
            return
        }
        if (password.trim().length<6 || confirmPassword !== password){
            return
        }
        

        dispatch(register(email,password, username))
    }


    return (
        <div className="container" style={{justifyContent:'space-around'}}>
            <h3>Registrarse</h3>
            <hr />
            <div className="row container">
                <form onSubmit={handleRegister} className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">email</i>
                            <input
                            name='email'
                            onChange={handleChange}
                            value={email}
                            id="icon_prefix1" className="materialize-textarea"
                            type='email'
                            
                            />
                            <label htmlFor="icon_prefix1">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">assignment_ind</i>
                            <input
                            name='username'
                            onChange={handleChange}
                            value={username}
                            id="icon_prefix2" className="materialize-textarea"
                            type='text'
                            required
                            min={2}
                            max={14}
                            />
                            <label htmlFor="icon_prefix2">Nombre de usuario</label>
                        </div>
                    </div>
                    <div className="row">
                            <div className="input-field col s12">
                            <i className="material-icons prefix">password</i>
                            <input
                            name='password'
                            onChange={handleChange}
                            value={password}
                            id="icon_prefix3" className="materialize-textarea"
                            type='password'
                            required
                            />
                            <label htmlFor="icon_prefix3">Contraseña</label>
                        </div>
                    </div>
                    <div className="row">
                            <div className="input-field col s12">
                            <i className="material-icons prefix">password</i>
                            <input
                            name='confirmPassword'
                            onChange={handleChange}
                            value={confirmPassword}
                            id="icon_prefix4" className="materialize-textarea"
                            type='password'
                            required
                            />
                            <label htmlFor="icon_prefix4">Confirmar contraseña</label>
                        </div>
                    </div>
                    <button className='waves-effect waves-light btn ' type="submit">Enviar</button>
                <hr />
                <p>¿Ya posee cuenta? <Link to='/auth/login'>Iniciar sesión</Link></p>
                </form>
            </div>
        </div>
    )
}

export default RegisterScreen
