const initState = {
    color: 'white' as ThemeColorType,
};
export type InitStateType = typeof initState

export const themeReducer = (state: InitStateType = initState, action: changeThemeACType): InitStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {color: action.color};
        }
        default: return state;
    }
};

export const changeThemeAC = (color: ThemeColorType): changeThemeACType => ({
    type: 'CHANGE-THEME',
    color
});

type changeThemeACType = {
    type: 'CHANGE-THEME',
    color: ThemeColorType
}

export type ThemeColorType = 'white' | 'dark' | 'blue' | 'red'