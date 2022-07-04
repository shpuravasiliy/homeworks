import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => props.setFilter('all');
    const setHigh = () => props.setFilter('high');
    const setMiddle = () => props.setFilter('middle');
    const setLow = () => props.setFilter('low');

    return (
        mappedAffairs.length ? <>
                <table>
                    <tbody>
                    <tr>
                        <th>name</th>
                        <th>priority</th>
                        <th>del</th>
                    </tr>

                    {mappedAffairs}
                    </tbody>

                </table>
                <div>
                    <SuperButton onClick={setAll}>All</SuperButton>
                    <SuperButton onClick={setHigh}>High</SuperButton>
                    <SuperButton onClick={setMiddle}>Middle</SuperButton>
                    <SuperButton onClick={setLow}>Low</SuperButton>
                </div>
            </>
            : <div>All affairs is done</div>
    )
}

export default Affairs
