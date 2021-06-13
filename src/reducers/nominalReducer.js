/**
 * 
 * {
 * id:String,
 * fecha: Date,
 * pago: Number * 
 * } 
 */

import { types } from "../types/types"

const initialState = {
    data:[],
}

export const nominalReducer = (state = initialState, action)=>{

    switch (action.type) {
        case types.nominaAdd:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case types.nominaRead:
            return {
                ...state,
                data: action.payload
            }
        case types.nominaDelete:
            return{
                ...state,
                data: state.data.filter((element)=>{
                    return element.id !== action.payload
                })
            }
        case types.nominaClean:
            return {
                ...state,
                data: []
            }
        default:
            return state
    }

}