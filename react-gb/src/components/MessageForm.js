import React, {useEffect, useRef} from "react";
import {useTheme} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const MessageForm = ({text, changeHandler, keyPressHandler, buttonHandler}) => {
    const theme = useTheme();
    const inputRef = useRef(null);

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