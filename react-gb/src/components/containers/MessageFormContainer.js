import React, {useCallback, useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import shallowEqual from "react-redux/lib/utils/shallowEqual";
import {MessageForm} from "../MessageForm";
import {getProfile} from "../../store/profile/profileSelector";
import {addMessageWithThunk} from "../../store/message/messageAction";

export const MessageFormContainer = () => {
    const dispatch = useDispatch();

    let chatId = parseInt(useParams().chatId, 10);

    let { showName, userName } = useSelector(getProfile, shallowEqual);
    userName = showName? userName : "Anonymous";

    const [text, setText] = useState('');
    const changeHandler = (event) => {
        setText(event.target.value);
    };

    const onAddMessage = useCallback((message, author = userName) => {
        dispatch(addMessageWithThunk(chatId, message, author));
    },[chatId, dispatch, userName]);

    const keyPressHandler = (event) => {
        if (event.key === 'Enter') {
            onAddMessage(text);
            setText('');
        }
    };

    const buttonHandler = () => {
        onAddMessage(text);
        setText('');
        inputRef.current?.focus();
    }

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [chatId])

    return (
        <MessageForm
            refer = {inputRef}
            text = {text}
            changeHandler = {changeHandler}
            keyPressHandler = {keyPressHandler}
            buttonHandler = {buttonHandler}
        />
    )
}