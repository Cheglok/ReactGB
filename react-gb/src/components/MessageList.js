import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/Inbox";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import React from "react";
import Box from "@mui/material/Box";
import {useSelector} from "react-redux";

export const MessageList = ({messages, theme}) => {
    // if (!messages.length) {
    //     return (<p>Нет сообщений</p>)
    // }
    const profileName = useSelector(state => state.profile.name);
    console.log(profileName);

    return (
        <List>
            {messages.map(message => {
                        return (
                <ListItem disablePadding key={message.id}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <Box sx={{ flexDirection: 'column' }}>
                            <ListItemText primary={"Автор: " + profileName} />
                            <ListItemText primary={"Сообщение: " + message.title} />
                            <ListItemText primary={message.botComment} />
                        </Box>
                </ListItem>
                        )
                    })}
        </List>
    )
}