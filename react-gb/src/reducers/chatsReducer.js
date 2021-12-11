import {ADD_CHAT, REMOVE_CHAT} from "../actions/chatActions";
import {getChats} from "../components/data";

const initialState = {
    // loading: false,
    // entries: [],
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
                        id: `id${state.chatList.length}`,
                        name: action.name,
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