import React, {useState} from "react";
import {useCallback} from "react";
import {changeName} from "../actions/profileActions";
import {useDispatch} from "react-redux";


export const Profile = () => {
    const dispatch = useDispatch();

    const [value, setValue] = useState('');

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
        </>
    );
}
