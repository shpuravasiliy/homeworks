import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import loader from '../../assets/images/Spinner.svg'
import {useDispatch, useSelector} from 'react-redux';
import {loadingAC} from './bll/loadingReducer';
import {AppStoreType} from './bll/store';

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)
    const dispatch = useDispatch();

    const setLoading = () => {
        dispatch(loadingAC());
        setTimeout(() => {
            console.log('loading...')
            dispatch(loadingAC());
        }, 2000)

    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <img
                        src={loader}
                        alt="placeholder"
                    />
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
