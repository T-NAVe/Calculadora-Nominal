import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { crearRegistro } from '../actions/nomina'

const FormAdd = () => {

    const dispatch = useDispatch()
    const [viewForm, setViewForm] = useState(false)
    const [cantidadPago, setCantidadPago] = useState({
        horas:undefined,
        precioHora:undefined
    })
    const{precioHora, horas} = cantidadPago

    const handleAdd = ()=>{
        setViewForm(!viewForm)

    }
    const handlePago = (e)=>{
        setCantidadPago({
            ...cantidadPago,
            [e.target.name]:e.target.value
        })

    }

    const handleSave = ()=>{
        if(horas&&precioHora){
            const cantidadFinal = horas * precioHora
            dispatch(crearRegistro(cantidadFinal))
            setCantidadPago({
                horas:undefined,
                precioHora:undefined
            })
        }
    }

    return (
        <div>
             <button onClick={handleAdd} className="btn green waves-effect">{ !viewForm?"Agregar":"Cerrar"}</button>
             {
                 viewForm&&
                <div className="animate__animated animate__fadeIn">  
                <div className="input-field col s12">
                    <label htmlFor="precioHora">Pago por Hora </label>
                     <input 
                     id="precioHora"
                     type="text" 
                     value={precioHora}
                     onChange={handlePago}
                     name="precioHora"
                    />
                </div>
                <div className="input-field col s12">
                    <label htmlFor="horas">Horas trabajadas </label>
                     <input 
                     id="horas"
                     type="text" 
                     value={horas}
                     onChange={handlePago}
                     name="horas"
                    />
                </div>
                    <button 
                    onClick={handleSave}
                    className="btn purple waves-effect">Calcular y Guardar</button>
                </div>
             }
        </div>
    )
}

export default FormAdd
