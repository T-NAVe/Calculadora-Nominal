/**
 * {
 * id:String,
 * fecha: Date,
 * pago: Number * 
 * } 
 */

import { db } from "../firebase/configFirebase"
import { types } from "../types/types"


export const crearRegistro = (pago)=>{

    return async (dispatch, getState)=>{

        const {uid} = getState().auth
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        const datos = {
            fecha: new Date().toLocaleDateString(undefined, options),
            pago
        }

        const referencia = await db.collection(`${uid}/nominas/nomina`).add(datos)
        const id = referencia.id
        const newData = {
            id,
            ...datos
            
        }
        dispatch(crear(newData))
    }
}

export const leerRegistros = (data)=>{
    return {
        type: types.nominaRead,
        payload: data
    }

}

export const crear = (data)=>{
    return{
        type: types.nominaAdd,
        payload: data
    }
}
export const borrarRegistro =  (id)=>{
    return async (dispatch, getState)=>{
        const {uid} = await getState().auth
        await db.doc(`${uid}/nominas/nomina/${id}`).delete()
        dispatch(borrar(id))
    }

}

export const borrar = (id)=>{
    return{
        type: types.nominaDelete,
        payload: id
    }
}
export const limpiar = ()=>{
    return{
        type: types.nominaClean
    }
}