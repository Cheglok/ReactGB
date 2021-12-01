import {useParams, useNavigate} from "react-router-dom";
import {Chats} from "./Chats";
import {getChat, removeChat} from "./data";

export default function Chat() {
    let navigate = useNavigate();
    let params = useParams();
    let chat = getChat(parseInt(params.chatId, 10))

    if (!chat) {
        return <h2>Чат не найден</h2>
    }
    return (
        <>
            <h2>Chat with: {chat.name}</h2>
            <Chats/>
        </>);

}