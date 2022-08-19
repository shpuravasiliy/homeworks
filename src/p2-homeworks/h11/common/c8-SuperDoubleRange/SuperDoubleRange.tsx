import React from 'react'
import {Slider} from '@mui/material';
import {SxProps} from '@mui/system';
import {Theme} from '@mui/material/styles';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[]) => void
    value?: [number, number]
    min?: number
    max?: number
    step?: number
    disabled?: boolean
    style?: SxProps<Theme>
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min, max, step, disabled, style, ...restProps
    }
) => {

    const onChangeRangeHandler = (event: Event, newValue: number | number[], ) => {
        onChangeRange && onChangeRange(newValue as number[]);
    }

    return (
        <>
            <Slider
                value={value}
                onChange={onChangeRangeHandler}
                valueLabelDisplay="on"
                min={min}
                max={max}
                step={step}
                sx={style}
            />
        </>
    )
}

export default SuperDoubleRange
