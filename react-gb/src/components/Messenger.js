import {useState} from "react";
import {ChatsList} from "./ChatsList";
import {getChats} from "./data";

export const Messenger = () => {
    const [chats, setChats] = useState(getChats);

    const removeChat = (id) => {
        setChats(prevState =>
            prevState.filter(chat => chat.id !== id))
    };

    return (
        <>
            <ChatsList chats={chats} onRemove={removeChat}/>
        </>
    )
}