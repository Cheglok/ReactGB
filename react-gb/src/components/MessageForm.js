import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {useTheme} from "@mui/material";
import {useEffect, useRef} from "react";


export const MessageForm = ({title, changeHandler, keyPressHandler, buttonHandler}) => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [])
    const theme = useTheme();

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around'}}>
            <TextField
                inputRef={inputRef}
                id="outlined-basic"
                label="Введите ваше сообщение"
                variant="filled"
                value={title}
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