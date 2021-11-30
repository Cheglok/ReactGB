import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/Inbox";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import React from "react";
import {Link, Outlet} from "react-router-dom";

export const ChatsList = ({chats}) => {
    return (
        <div style={{display: "flex"}}>
            <List>
                {chats.map(chat => (
                    <ListItem disablePadding key={chat.id}>
                        <Link to={`/chats/${chat.id}`}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <InboxIcon/>
                                </ListItemIcon>
                                <ListItemText primary={chat.name}/>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
            <Outlet/>
        </div>

    )
}