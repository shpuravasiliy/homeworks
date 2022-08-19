import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState(100)

    const onChangeHandler = (value: number) => {
        setValue1(value)
    }
    const onChangeDoubleHandler = (newValue: number[]) => {
        setValue1(newValue[0])
        setValue2(newValue[1])
    }
    
    return (
        <div >
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div style={{width: '300px', margin: '0 auto' }}>
                <div style={{display: 'flex'}}>
                    <span style={{width: '30px'}}>{value1}</span>
                    <SuperRange
                        value={value1}
                        onChangeRange={onChangeHandler}
                        style={{display: 'inline' , width: '100%'}}
                    />
                </div>

                <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: '50px'}}>
                    <span style={{width: '40px'}}>{value1}</span>
                    <SuperDoubleRange
                        value={[value1, value2]}
                        onChangeRange={onChangeDoubleHandler}
                        style={{width: '100%'}}
                    />
                    <span style={{width: '40px', justifySelf: 'flex-end'}}>{value2}</span>
                </div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
