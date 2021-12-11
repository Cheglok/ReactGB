import {useDispatch, useSelector} from "react-redux";
import {Link, Outlet} from "react-router-dom";
import * as React from "react";
import {useCallback} from "react";
import {toggleShowName} from "../actions/profileActions";

function Main() {
    const { showName, userName } = useSelector((state) => state).profile;
    const dispatch = useDispatch();

    const setShowName = useCallback(() => {
        dispatch(toggleShowName);
    }, [dispatch]);
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">На главную</Link></li>
                    <li><Link to="/profile">Профиль</Link></li>
                    <li><Link to="/chats">Чаты</Link></li>
                </ul>
                <p>Пользователь: {showName && <i>{userName}</i>}</p>
                <input type="checkbox"
                       checked={showName}
                       value={showName}
                       onChange={setShowName}
                />
                <span>Показывать имя</span>
            </nav>
            <Outlet/>
        </>
    );
}

export default Main;