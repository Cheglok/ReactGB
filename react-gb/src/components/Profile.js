import React, {useState} from "react";
import {useCallback} from "react";
import {store} from "../store";
import {toggleShowName} from "../actions/prifileActions";
import {useDispatch, useSelector} from "react-redux";

export const Profile = () => {
    const { showName, name } = useSelector((state) => state).profile;
    const dispatch = useDispatch();

    const setShowName = useCallback(() => {
        dispatch(toggleShowName);
    }, [dispatch]);

    return (
        <div>
            <h4>Profile</h4>
            <input type="checkbox"
            checked={showName}
            value={showName}
            onChange={setShowName}
            />
            <span>Show Name</span>
            {showName && <div>{name}</div>}
        </div>
    )
}