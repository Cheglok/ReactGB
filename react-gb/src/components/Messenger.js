import React from "react";
import {Outlet} from "react-router-dom";
import {ChatCreateForm} from "./ChatCreateForm";
import {ChatList} from "./ChatList";

export const Messenger = () => {

    return (
        <div style={{display: "flex"}}>
            <div>
                <ChatList/>
                <ChatCreateForm/>
            </div>
            <Outlet/>
        </div>
    )
}