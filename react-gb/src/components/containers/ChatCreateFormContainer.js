import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import shallowEqual from "react-redux/lib/utils/shallowEqual";
import {ChatCreateForm} from "../ChatCreateForm";
import {getChatList} from "../../store/chat/chatSelector";
import {addChat} from "../../store/chat/chatActions";

export const ChatCreateFormContainer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const chats = useSelector(getChatList, shallowEqual);

    const [visible, setVisible] = useState(false);
    const [newChatName, setNewChatName] = useState("");

    const handleChange = (e) => setNewChatName(e.target.value);

    const handleClose = () => setVisible(false);
    const handleOpen = () => {
        setVisible(true);
        console.log(111)
    }

    const onAddChat = () => {
        console.log('add')
        const newChatId = chats.length;
        dispatch(addChat(newChatName, newChatId));
        setNewChatName("");
        handleClose();
        navigate(`${newChatId}`)
    };

    const keyPressHandler = (event) => {
        if (event.key === 'Enter') {
            onAddChat();
        }
    };

    return (
        <ChatCreateForm
            handleOpen = {handleOpen}
            visible = {visible}
            handleClose = {handleClose}
            newChatName = {newChatName}
            handleChange = {handleChange}
            keyPressHandler = {keyPressHandler}
            onAddChat = {onAddChat}
        />
    )
}