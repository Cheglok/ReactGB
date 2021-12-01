import {ChatsList} from "./ChatsList";
import React, {useState} from "react";
import {Outlet} from "react-router-dom";
import {ManageChats} from "./ManageChats";
import {getChats} from "./data";

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