import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/Inbox";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import React from "react";

export const ChatList = ({chats}) => {
    console.log(chats)
    return (
        <List>
            {chats.map(chat => {
                return (
                    <ListItem disablePadding key={chat.id}>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={chat.name} />
                        </ListItemButton>
                    </ListItem>
                )
            })}
        </List>
    )
}