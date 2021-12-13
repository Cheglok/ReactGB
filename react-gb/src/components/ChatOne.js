import React from 'react';
import {MessageList} from './MessageList';
import Container from "@mui/material/Container";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getChat} from "../store/chat/chatSelector";
import shallowEqual from "react-redux/lib/utils/shallowEqual";
import {MessageFormContainer} from "./containers/MessageFormContainer";


export function ChatOne() {

    const params = useParams();
    const chatId = parseInt(params.chatId, 10);

    const chat = useSelector(getChat(chatId), shallowEqual);

    if (!chat) {
        return <h2>Чат не найден</h2>
    }
    return (
        <>
            <h2>Chat with: {chat.name}</h2>
            <div className="Chats">
                <Container maxWidth={"md"}>
                    <MessageFormContainer/>
                    <MessageList/>
                </Container>
            </div>
        </>
    );
}
