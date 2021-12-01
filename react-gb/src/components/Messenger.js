import {ChatsList} from "./ChatsList";
import React, {useState} from "react";
import {Outlet} from "react-router-dom";
import {ManageChats} from "./ManageChats";

export const Messenger = () => {
    return (
        <>
            <ChatsList/>
            <ManageChats/>
            <Outlet/>
        </>
    )
}