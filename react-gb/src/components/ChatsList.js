import React from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {removeChat} from "../actions/chatActions";

export const ChatsList = () => {
    const dispatch = useDispatch();

    const chats = useSelector((state) => state.chats.chatList);

    let navigate = useNavigate();

    const onRemoveChat = (id) => {
        dispatch(removeChat(id));
    }

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
                                onRemoveChat(chat.id);
                                navigate("/chats");
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