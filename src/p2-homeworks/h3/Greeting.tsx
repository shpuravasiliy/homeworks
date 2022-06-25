import React from 'react'
import s from './Greeting.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void // need to fix any
    onKeyDownHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, onKeyDownHandler, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorBorder : ''; // need to fix with (?:)

    return (
        <div>
            <SuperInputText
                value={name}
                onChange={setNameCallback}
                onKeyDown={onKeyDownHandler}
                className={inputClass}
                onBlur={setNameCallback}
            />
            <SuperButton onClick={addUser} disabled={!name}>add</SuperButton>
            <span>{totalUsers}</span>
            <div className={s.errorText}>{error}</div>
        </div>
    )
}

export default Greeting
