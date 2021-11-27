import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import {useEffect, useRef} from "react";
import Box from "@mui/material/Box";
import {useTheme} from "@mui/material";


export const MessageForm = ({title, changeHandler, keyPressHandler, buttonHandler}) => {
    // const inputRef = useRef(null);       На Input срабатывает, а на TextField нет
    //
    // useEffect(() => {
    //     inputRef.current?.focus();
    //     console.log(inputRef)
    // }, [])
    const theme = useTheme();

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around'}}>
            <TextField
                autoFocus
                style={{margin: '20px'}}
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
                }}
            />
            {/*<input type="text" ref={inputRef}/>*/}
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