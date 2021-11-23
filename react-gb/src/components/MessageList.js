import {Message} from "./Message";

export const MessageList = ({
    messages,
    onRemove
}) => {
    if (!messages.length) {
        return (<p>Нет сообщений</p>)
    }
    return (
        <ul className="Message-list">
            {messages.map(message => {
                return (
                    <Message
                        message={message}
                        onRemove={onRemove}
                        key={message.id}
                        botComment = {message.botComment}
                    />
                )
            })}
        </ul>
    )
}