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
        const cantidadFinal = horas * precioHora
        dispatch(crearRegistro(cantidadFinal))
    }

    return (
        <div>
             <button onClick={handleAdd} className="btn green waves-effect">{ !viewForm?"Agregar":"Cerrar"}</button>
             {
                 viewForm&&
                <>
                     <input 
                     type="text" 
                     placeholder="Ingresa el monto por hora" value={precioHora}
                     onChange={handlePago}
                     name="precioHora"
                    />
                     <input 
                     type="text" 
                     placeholder="Ingresa cantidad horas" value={horas}
                     onChange={handlePago}
                     name="horas"
                    />
                    <button 
                    onClick={handleSave}
                    className="btn purple waves-effect">Calcular y Guardar</button>
                </>
             }
        </div>
    )
}

export default FormAdd
