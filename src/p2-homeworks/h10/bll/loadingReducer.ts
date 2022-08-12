export type stateType = {
    loading: boolean
}

const initState: stateType = {
    loading: false
}

export const loadingReducer = (state: stateType = initState, action: loadingACType): stateType => { // fix any
    switch (action.type) {
        case 'TOGGLE-LOADING': {
            return {
                loading: !state.loading
            }
        }
        default:
            return state
    }
}

type loadingACType = ReturnType<typeof loadingAC>

export const loadingAC = () => ({
    type: 'TOGGLE-LOADING'
} as const) // fix any