export const Message = ({
    message, onRemove
}) => {
    return (
        <li>
            <p>{message.title}</p>
            <p>{message.botComment}</p>
            <button onClick={()=>onRemove(message.id)}>delete</button>
        </li>
    )
}