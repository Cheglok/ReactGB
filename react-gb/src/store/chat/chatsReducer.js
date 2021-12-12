import {ADD_CHAT, REMOVE_CHAT} from "./chatActions";
import {getChats} from "../../helpers/data";

const initialState = {
    chatList: getChats(),
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    {
                        name: action.name,
                        id: state.chatList.length,
                    },
                ],
            };
        case REMOVE_CHAT: return {
            ...state,
            chatList: state.chatList.filter(chat => chat.id !== action.id)
        }
        default:
            return state;
    }
}