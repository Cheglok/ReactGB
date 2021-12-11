import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, {useState} from "react";
import {useTheme} from "@mui/material";
import {useDispatch} from "react-redux";
import {addChat} from "../actions/chatActions";

export const ChatCreateForm = () => {
    const [name, setName] = useState('');
    const theme = useTheme();
    const dispatch = useDispatch();

    const onAddChat = (userName) => {
        dispatch(addChat(userName));
    }

    const changeHandler = (event) => {
        setName(event.target.value);
    };

    const keyPressHandler = (event) => {
        if (event.key === 'Enter') {
            console.log(name);
            onAddChat(name);
            setName('');
        }
    };

    const buttonHandler = () => {
        console.log(name);
        onAddChat(name);
        setName('');
    }

    return (
        <>
            <h2>Создать новый чат</h2>
            <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
                <TextField
                    id="outlined-basic"
                    label="Введите имя собеседника"
                    variant="filled"
                    value={name}
                    onChange={changeHandler}
                    onKeyPress={keyPressHandler}
                />
                <Button
                    variant="outlined"
                    onClick={buttonHandler}
                    style={{
                        color: theme.palette.secondary.dark,
                        backgroundColor: theme.palette.primary.main,
                        borderColor: theme.palette.secondary.main,
                    }}
                >Создать</Button>
            </Box>
        </>
    )
}