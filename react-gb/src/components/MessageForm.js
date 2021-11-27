import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import {useEffect, useRef} from "react";
import Box from "@mui/material/Box";

export const MessageForm = ({title, changeHandler, keyPressHandler, buttonHandler}) => {
    // const inputRef = useRef(null);       На Input срабатывает, а на TextField нет
    //
    // useEffect(() => {
    //     inputRef.current?.focus();
    //     console.log(inputRef)
    // }, [])

    return (
        <Box sx={{ display: 'flex' }}>
            <TextField
                autoFocus
                style={{margin: '20px'}}
                id="outlined-basic"
                label="Введите ваше сообщение"
                variant="filled"
                value={title}
                onChange={changeHandler}
                onKeyPress={keyPressHandler}
            />
            {/*<input type="text" ref={inputRef}/>*/}
            <Button
                variant="outlined"
                onClick={buttonHandler}
            >Отправить</Button>
        </Box>
    )
}