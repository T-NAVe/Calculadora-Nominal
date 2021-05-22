/**
 * {
 * id:String,
 * fecha: Date,
 * pago: Number * 
 * } 
 */

import { db } from "../firebase/configFirebase"


export const crearRegistro = (pago)=>{

    return async (dispatch, getState)=>{

        const {uid} = getState().auth

        const datos = {
            fecha: new Date(),
            pago
        }

        const referencia = await db.collection(`${uid}/nominas/nomina`).add(datos)
        console.log(referencia)
    }
}

