import {ChatsList} from "./ChatsList";
import React from "react";
import {Outlet} from "react-router-dom";
import {ManageChats} from "./ManageChats";

export const Messenger = ({chats, addChat, removeChat}) => {

    return (
        <div style={{display: "flex"}}>
            <div>
                <ChatsList chats={chats} removeChat={removeChat}/>
                <ManageChats addChat={addChat}/>
            </div>
            <Outlet/>
        </div>
    )
}