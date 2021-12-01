import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {getChats, removeChat} from "./data";

export const ChatsList = () => {
    let chats = getChats();

    useEffect(() => {
        console.log("change");
        chats = getChats();
    }, [chats])

    return (
        <div style={{display: "flex"}}>
            <nav
                style={{
                    borderRight: "solid 1px",
                    padding: "1rem"
                }}
            >
                {chats.map(chat => (
                    <React.Fragment key={chat.id}>
                        <NavLink
                            style={({isActive}) => {
                                return {
                                    display: "block",
                                    margin: "1rem 0",
                                    color: isActive ? "red" : ""
                                };
                            }}
                            to={`/chats/${chat.id}`}
                        >
                            {chat.name}
                        </NavLink>
                        <button
                            onClick={() => {
                                removeChat(chat.id);
                                chats = getChats();
                            }}
                        >
                            Delete
                        </button>
                    </React.Fragment>
                ))}
            </nav>
        </div>
    );
}