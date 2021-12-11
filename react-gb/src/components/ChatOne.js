import React from 'react';
import {MessagesList} from './MessagesList';
import {MessageForm} from './MessageForm';
import Container from "@mui/material/Container";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";


export function ChatOne() {

    let params = useParams();

    const chats = useSelector((state) => state.chats.chatList);
    let chat = chats.find(
        chat => chat.id === parseInt(params.chatId, 10));

    if (!chat) {
        return <h2>Чат не найден</h2>
    }
    return (
        <>
            <h2>Chat with: {chat.name}</h2>
            <div className="Chats">
                <Container maxWidth={"md"}>
                    <MessageForm/>
                    <MessagesList/>
                </Container>
            </div>
        </>
    );
}
