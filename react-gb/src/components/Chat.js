import { useParams } from "react-router-dom";
import {getChat} from "./data";
import {Chats} from "./Chats";

export default function Chat() {
    let params = useParams();
    let chat = getChat(parseInt(params.chatId, 10));
    return (
        <>
        <h2>Chat with: {chat.name}</h2>
            <Chats/>
            </>);

}