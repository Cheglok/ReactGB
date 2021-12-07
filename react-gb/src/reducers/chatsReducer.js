import {CHATS_LOAD, CHATS_MESSAGE_SEND} from "../actions/chatActions";

import {chatsInitial} from "../helpers/chatsData";

const initialState = {
    loading: false,
    entries: [],
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHATS_LOAD:
            return {
                ...state, entries: chatsInitial,
            };
        default:
            return state;
    }
}