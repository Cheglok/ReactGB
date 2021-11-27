import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";

export const MessageForm = ({title, changeHandler, keyPressHandler, buttonHandler}) => {
    return (
        <>
            <TextField
                style={{margin: '20px'}}
                id="outlined-basic"
                label="Введите ваше сообщение"
                variant="filled"
                value={title}
                onChange={changeHandler}
                onKeyPress={keyPressHandler}
            />
            <Button
                variant="outlined"
                onClick={buttonHandler}
            >Отправить</Button>
        </>
    )
}