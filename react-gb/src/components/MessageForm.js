import React, {useCallback, useEffect, useRef, useState} from "react";
import {useTheme} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {useDispatch, useSelector} from "react-redux";
import {addMessage} from "../actions/messageAction";
import {useParams} from "react-router-dom";

export const MessageForm = () => {
    const dispatch = useDispatch();
    const inputRef = useRef(null);
    const theme = useTheme();

    let chatId = parseInt(useParams().chatId, 10);
    const messages = useSelector((state) => state.messages.messageList);
    const thisChat = messages[chatId];

    let { showName, userName } = useSelector((state) => state.profile);
    userName = showName? userName : "Anonymous";

    const [text, setText] = useState('');
    const changeHandler = (event) => {
        setText(event.target.value);
    };

    const onAddMessage = useCallback((message, author = userName) => {
        dispatch(addMessage(chatId, message, author));
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

    const createBotComment = useCallback((author) => {
        onAddMessage(`${author}, ваше сообщение прочитано`, 'bot')
    }, [onAddMessage]);

    useEffect(() => {
        if(thisChat && thisChat[0].author !== "bot") {
            setTimeout(createBotComment, 1500, thisChat[0].author);
        }
    }, [thisChat, createBotComment, onAddMessage])

    useEffect(() => {
        inputRef.current?.focus();
    }, [])

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around'}}>
            <TextField
                inputRef={inputRef}
                id="outlined-basic"
                label="Введите ваше сообщение"
                variant="filled"
                value={text}
                onChange={changeHandler}
                onKeyPress={keyPressHandler}
                style={{
                    color: theme.palette.secondary.dark,
                    backgroundColor: theme.palette.background.default,
                    borderColor: theme.palette.secondary.main,
                    margin: '20px'
                }}
            />
            <Button
                variant="outlined"
                onClick={buttonHandler}
                style={{
                    color: theme.palette.secondary.dark,
                    backgroundColor: theme.palette.primary.main,
                    borderColor: theme.palette.secondary.main,
                }}
            >Отправить</Button>
        </Box>
    )
}