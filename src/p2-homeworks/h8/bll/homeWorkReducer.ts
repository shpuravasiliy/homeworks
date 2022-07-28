import {UserType} from '../HW8';

export const homeWorkReducer = (state: UserType[], action: ActionCreatorType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return action.payload === 'up' ? [...state].sort((a, b) => a.name.localeCompare(b.name)) : [...state].sort((a, b) => b.name.localeCompare(a.name));
        }
        case 'check': {
            return state.filter(u => u.age >= action.payload);
        }
        default:
            return state
    }
}

type ActionCreatorType = ReturnType<typeof sortUpAC> | ReturnType<typeof sortDownAC> | ReturnType<typeof checkAC>

const sortUpAC = () => {
    return {
        type: 'sort',
        payload: 'up'
    } as const
}
const sortDownAC = () => {
    return {
        type: 'sort',
        payload: 'down'
    } as const
}
const checkAC = (age: number) => {
    return {
        type: 'check',
        payload: age
    } as const
}