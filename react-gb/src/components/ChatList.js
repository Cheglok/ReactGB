import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {removeChat} from "../store/chat/chatActions";
import {NavLink, useNavigate} from "react-router-dom";
import {getChatList} from "../store/chat/chatSelector";
import shallowEqual from "react-redux/lib/utils/shallowEqual";

export const ChatList = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const chats = useSelector(getChatList, shallowEqual);

    const onRemoveChat = (id) => {
        dispatch(removeChat(id));
    };

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
};

