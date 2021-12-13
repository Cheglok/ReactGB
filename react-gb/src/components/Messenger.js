import React from "react";
import {Outlet} from "react-router-dom";
import {ChatList} from "./ChatList";
import {ChatCreateFormContainer} from "./containers/ChatCreateFormContainer";

export const Messenger = () => {

    return (
        <div style={{display: "flex"}}>
            <div>
                <ChatList/>
                <ChatCreateFormContainer/>
            </div>
            <Outlet/>
        </div>
    )
}