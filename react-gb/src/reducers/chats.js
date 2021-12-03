import {CHATS_LOAD, CHATS_MESSAGE_SEND} from "../actions/chats";

const initialState = {
    loading: false,
    entries: [],
}

export const chatsReducer = (state = initialState, action) => {
    return state;
}