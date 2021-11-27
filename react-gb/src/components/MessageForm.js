import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useEffect, useRef} from "react";

export const MessageForm = ({title, changeHandler, keyPressHandler, buttonHandler}) => {
    // const inputRef = useRef(null);       На
    //
    // useEffect(() => {
    //     inputRef.current?.focus();
    //     console.log(inputRef)
    // }, [])

    return (
        <>
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
        </>
    )
}