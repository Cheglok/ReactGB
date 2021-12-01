import {useParams} from "react-router-dom";
import {Chats} from "./Chats";

export default function Chat({chats}) {
    let params = useParams();

    let chat = chats.find(
        chat => chat.id === parseInt(params.chatId, 10))

    if (!chat) {
        return <h2>Чат не найден</h2>
    }
    return (
        <>
            <h2>Chat with: {chat.name}</h2>
            <Chats name={chat.name}/>
        </>);

}