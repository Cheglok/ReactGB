export const Message = ({
    message, onRemove
}) => {
    return (
        <li>
            <p className="Message-text">
                {message.title}
                <button onClick={()=>onRemove(message.id)}>delete</button>
            </p>
            <p className="Message-comment">{message.botComment}</p>
        </li>
    )
}