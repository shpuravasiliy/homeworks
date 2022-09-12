import React, {ChangeEvent, useState} from 'react';
import SuperButton from '../../../p2-homeworks/h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../../../p2-homeworks/h4/common/c3-SuperCheckbox/SuperCheckbox';
import {bodyType, RequestsAPI} from './RequestsAPI';
import style from './Request.module.css'

const Request = () => {
    const [value, setValue] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const [response, setResponse] = useState<string>('')


    const onClickButtonHandler = () => {
        const body: bodyType = {
            success: value
        }
        RequestsAPI.create(body)
            .then(res => {
                error && setError(false)
                setResponse(res.data.errorText)
            })
            .catch(e => {
                !error && setError(true)
                setResponse(e.response ? e.response.data.errorText : e.message);
            })
    };

    const onChangeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    };

    return (
        <div>
            <div>
                <SuperButton
                    children={'Request'}
                    onClick={onClickButtonHandler}
                />
            </div>
            <div>
                <SuperCheckbox
                    checked={value}
                    onChange={onChangeCheckboxHandler}
                />
            </div>
            <div>
                Response: <span className={error ? style.response : ''}>{response}</span>
            </div>
        </div>
    );
};

export default Request;