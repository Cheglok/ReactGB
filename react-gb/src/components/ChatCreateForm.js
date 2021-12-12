import React, {useState} from "react";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import {addChat} from "../store/chat/chatActions";
import {useDispatch} from "react-redux";
import {useTheme} from "@mui/material";

export const ChatCreateForm = () => {
    const theme = useTheme();
    const dispatch = useDispatch();

    const [visible, setVisible] = useState(false);
    const [newChatName, setNewChatName] = useState("");

    const handleChange = (e) => setNewChatName(e.target.value);

    const handleClose = () => setVisible(false);
    const handleOpen = () => {
        setVisible(true);
        console.log(111)
    }

    const onAddChat = () => {
        dispatch(addChat(newChatName));
        setNewChatName("");
        handleClose();
    };

    const keyPressHandler = (event) => {
        if (event.key === 'Enter') {
            onAddChat();
        }
    };

    return (
        <div>
            <button
                className="add-chat"
                onClick={handleOpen}
                style={{
                        color: theme.palette.secondary.dark,
                        backgroundColor: theme.palette.primary.main,
                        borderColor: theme.palette.secondary.main,
                    }}
            >
                Add Chat
            </button>
            <Dialog open={visible} onClose={handleClose}>
                <DialogTitle>Please enter a name for new chat</DialogTitle>
                <TextField
                    value={newChatName}
                    onChange={handleChange}
                    onKeyPress={keyPressHandler}/>
                <Button
                    onClick={onAddChat}
                    disabled={!newChatName}
                    style={{
                        color: theme.palette.secondary.dark,
                        backgroundColor: theme.palette.primary.main,
                        borderColor: theme.palette.secondary.main,}}
                >
                    Submit
                </Button>
            </Dialog>
        </div>
    )
}