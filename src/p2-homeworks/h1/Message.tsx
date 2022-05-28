import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            <div className={s.avatar}>
                <img
                    src={props.avatar}
                    alt="avatar"
                />
            </div>
            <div className={s.area_background}></div>
            <div className={s.area}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <div className={s.data}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
