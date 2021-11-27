import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/Inbox";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import React from "react";
import Box from "@mui/material/Box";

export const MessageList = ({
    messages,
}) => {
    if (!messages.length) {
        return (<p>Нет сообщений</p>)
    }
    return (
        <List>
            {messages.map(message => {
                        return (
                <ListItem disablePadding key={message.id}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <Box sx={{ flexDirection: 'column' }}>
                            <ListItemText primary={message.title} />
                            <ListItemText primary={message.botComment} />
                        </Box>
                </ListItem>
                        )
                    })}
        </List>
        // <ul className="Message-list">
        //     {messages.map(message => {
        //         return (
        //             <Message key={message.id}
        //                 message={message}
        //                 onRemove={onRemove}
        //             />
        //         )
        //     })}
        // </ul>
    )
}