import React from 'react'
import {AffairType} from './HW2';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.deleteAffairCallback(props.affair._id);

    return (
        <tr>
            <td>{props.affair.name}</td>
            <td>{props.affair.priority}</td>
            <td><SuperButton onClick={deleteCallback}>X</SuperButton></td>
        </tr>
    )
}

export default Affair
