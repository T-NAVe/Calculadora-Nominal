import React from 'react'
import { useDispatch } from 'react-redux';
import { borrarRegistro } from '../actions/nomina';

const Element = ({data}) => {
    const {fecha,pago, id} = data;
    
    const dispatch = useDispatch()
    const handleDelete = ()=>{
        dispatch(borrarRegistro(id))
    }    

    return (
        <tr className="animate__animated animate__fadeInUp">
            <td>{fecha}</td>
            <td>${pago}</td>
            <td><button 
            onClick={handleDelete}
            className="btn-floating btn-medium waves-effect waves-light red"><i className="material-icons">delete</i></button></td>
        </tr>
    )
}

export default Element
