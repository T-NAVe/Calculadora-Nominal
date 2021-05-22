/**
 * 
 * {
 * id:String,
 * fecha: Date,
 * pago: Number * 
 * } 
 */

import { types } from "../types/types"



export const nominalReducer = (state ={}, action)=>{

    switch (action.type) {
        case types.nominaAdd:
            return {}
        default:
            return state
    }

}