import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useState} from "react";

export const ManageChats = ({addChat}) => {

    const [name, setName] = useState('');

    const changeHandler = (event) => {
        setName(event.target.value);
    };

    const keyPressHandler = (event) => {
        if (event.key === 'Enter') {
            console.log(name);
            addChat(name);
            setName('');
        }
    };

    const buttonHandler = () => {
        console.log(name);
        addChat(name);
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
                {/*<input type="text" ref={inputRef}/>*/}
                <Button
                    variant="outlined"
                    onClick={buttonHandler}
                    style={{
                        // color: theme.palette.secondary.dark,
                        // backgroundColor: theme.palette.primary.main,
                        // borderColor: theme.palette.secondary.main,
                    }}
                >Создать</Button>
            </Box>
        </>
    )
}