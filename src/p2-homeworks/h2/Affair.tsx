import React from 'react'
import {AffairType} from './HW2';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.deleteAffairCallback(props.affair._id);

    return (
        <tr>
            <td>{props.affair.name}</td>
            <td>{props.affair.priority}</td>
            <button onClick={deleteCallback}>X</button>
        </tr>
    )
}

export default Affair
