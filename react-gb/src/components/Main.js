import {useDispatch, useSelector} from "react-redux";
import {Link, Outlet} from "react-router-dom";
import * as React from "react";
import {useCallback} from "react";
import {toggleShowName} from "../store/profile/profileActions";
import {getProfile} from "../store/profile/profileSelector";
import shallowEqual from "react-redux/lib/utils/shallowEqual";

function Main() {
    const { showName, userName } = useSelector(getProfile, shallowEqual);
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
                    <li><Link to="/gists">Gists</Link></li>
                    <li><Link to="/signup">Registration</Link></li>
                    <li><Link to="/login">Login</Link></li>
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