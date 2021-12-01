import React from "react";
import {NavLink, Outlet} from "react-router-dom";

export const ChatsList = ({chats, onRemove}) => {
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
                        <button onClick={() => onRemove(chat.id)}>Удалить чат</button>
                    </React.Fragment>
                ))}
            </nav>
            <Outlet/>
        </div>
    );
}