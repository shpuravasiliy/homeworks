import React from 'react';
import s from './HW12.module.css';
import {changeThemeAC, ThemeColorType} from './bll/themeReducer';
import {useDispatch, useSelector} from 'react-redux';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import {AppStoreType} from '../h10/bll/store';

const themes: ThemeColorType[] = ['white', 'dark', 'blue', 'red'];

function HW12() {
    const theme = useSelector<AppStoreType, ThemeColorType>(state => state.theme.color)
    const dispatch = useDispatch();
    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeAC(theme as ThemeColorType))
    }

    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <div>
                <SuperSelect
                    options={themes}
                    onChangeOption={onChangeCallback}
                    value={theme}
                />
            </div>

            <hr/>
        </div>
    );
}

export default HW12;
