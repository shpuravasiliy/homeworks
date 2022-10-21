import React, {useRef, useState} from 'react';
import SuperButton from '../../../p2-homeworks/h4/common/c2-SuperButton/SuperButton';
import {RequestsAPI, ResponseType, SuccessType} from './RequestsAPI';
import {AxiosError} from 'axios';
import img400 from '../assets/image/400.png'
import img500 from '../assets/image/500.png'
import img200 from '../assets/image/200.png'
import s from './Request.module.css'

type ReturnTimeoutType = ReturnType<typeof setTimeout>

const RequestAutotest = () => {
    const [isPending, setIsPending] = useState(false)
    const [code, setCode] = useState<number | undefined>(undefined)
    const [error, setError] = useState<string | undefined>(undefined)

    const [response, setResponse] = useState<string | undefined>(undefined)
    const timerId = useRef<ReturnTimeoutType | null>(null)

    const setIsPendingDelay = () => {
        timerId.current = setTimeout(() => {
            setIsPending(false)
        }, 1000)
        return () => {
            clearTimeout(timerId.current as ReturnTimeoutType)
        }
    }

    const viewImg = (code: number | undefined) => {
        switch (code) {
            case 200:
                return img200
            case 400:
                return img400
            case 500:
                return img500
            default:
                return
        }
    }

    const onClickButtonHandler = (success: SuccessType) => {
        setIsPending(true)
        RequestsAPI.create({success})
            .then(res => {
                setError(res.data?.errorText)
                setCode(res.status)
                setResponse(res.data.info)
            })
            .catch((e: AxiosError<ResponseType>) => {
                setError(e.response?.data?.errorText)
                setCode(e.response?.status)
                setResponse(e.response?.data.info);
            })
            .finally(() => {
                setIsPendingDelay()
            })
    };

    return (
        <div>
            <div>
                <SuperButton
                    children={'Send true'}
                    title={'Send true'}
                    disabled={isPending}
                    onClick={() => onClickButtonHandler(true)}
                />
                <SuperButton
                    children={'Send false'}
                    title={'Send false'}
                    disabled={isPending}
                    onClick={() => onClickButtonHandler(false)}
                />
                <SuperButton
                    children={'Send undefined'}
                    title={'Send undefined'}
                    disabled={isPending}
                    onClick={() => onClickButtonHandler(undefined)}
                />
                <SuperButton
                    children={'Send null'}
                    title={'Send null'}
                    disabled={isPending}
                    onClick={() => onClickButtonHandler(null)}
                />
            </div>
            <div
                className={s.container}
            >
                {code && <>
                    <div
                        className={s.imageBlock}
                    >
                        <img
                            src={viewImg(code)}
                            alt={'code'}
                            className={s.image}
                        />
                    </div>
                    <div
                        className={s.textBlock}
                    >
                        <div
                            className={s.textTitle}
                        >{`${code === 200 ? 'Код' : 'Ошибка'} ${code}!`}</div>
                        <div
                            className={s.textDescription}
                        >{error}</div>
                        <div
                            className={s.textDescription}
                        >{response}</div>
                    </div>
                </>
                }
            </div>
        </div>
    );
};

export default RequestAutotest;