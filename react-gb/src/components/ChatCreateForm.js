import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import {useTheme} from "@mui/material";

export const ChatCreateForm = (
    {handleOpen, visible, handleClose, newChatName, handleChange, keyPressHandler, onAddChat}) => {
    const theme = useTheme();
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
                    autoFocus
                    value={newChatName}
                    onChange={handleChange}
                    onKeyPress={keyPressHandler}
                />
                <Button
                    onClick={onAddChat}
                    disabled={!newChatName}
                    style={{
                        color: theme.palette.secondary.dark,
                        backgroundColor: theme.palette.primary.main,
                        borderColor: theme.palette.secondary.main,
                    }}

                >
                    Submit
                </Button>
            </Dialog>
        </div>
    )
}