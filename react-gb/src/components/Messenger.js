import React from "react";
import {ChatsList} from "./ChatsList";
import {Outlet} from "react-router-dom";
import {ChatCreateForm} from "./ChatCreateForm";

export const Messenger = () => {

    return (
        <div style={{display: "flex"}}>
            <div>
                <ChatsList/>
                <ChatCreateForm/>
            </div>
            <Outlet/>
        </div>
    )
}