import { useParams } from "react-router-dom";

export default function Chat() {
    let params = useParams();
    return <h2>Chat: {params.chatId}</h2>;
}