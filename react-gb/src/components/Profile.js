import React, {useState} from "react";
import {useCallback} from "react";
import {changeName, toggleShowName} from "../actions/profileActions";
import {useDispatch, useSelector} from "react-redux";


export const Profile = () => {
    const { showName, name } = useSelector((state) => state).profile;
    const dispatch = useDispatch();

    const [value, setValue] = useState('');

    const setShowName = useCallback(() => {
        dispatch(toggleShowName);
    }, [dispatch]);

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);



    const setName = useCallback(() => {
        dispatch(changeName(value));
        setValue("");
    }, [dispatch, value]);

    return (
        <>
            <div>
                <h4>Profile</h4>
            </div>
            <div>
                <input type="text" value={value} onChange={handleChange} />
            </div>
            <div>
                <button onClick={setName}>Change Name</button>
            </div>
            <input type="checkbox"
                   checked={showName}
                   value={showName}
                   onChange={setShowName}
            />
            <span>Show Name</span>
            {showName && <div>{name}</div>}
        </>
    );
}
