import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from './Pages';
import style from './Header.module.css';

function Header() {

    const [view, setView] = useState<boolean>(false)

    const onMouseHandler = () => {
        setView(!view)
    }

    const classNameMenu = view ? style.menu + ' ' + style.menuShow : style.menu;

    return (
        <div>
            <nav>
                <ul className={classNameMenu} onMouseLeave={onMouseHandler}>
                    <li><NavLink to={PATH.PRE_JUNIOR}>Pre junior</NavLink></li>
                    <li><NavLink to={PATH.JUNIOR}>Junior</NavLink></li>
                    <li><NavLink to={PATH.JUNIOR_PLUS}>Junior+</NavLink></li>
                </ul>
                <div onMouseOver={onMouseHandler} className={style.box}>+</div>
            </nav>
        </div>
    )
}

export default Header