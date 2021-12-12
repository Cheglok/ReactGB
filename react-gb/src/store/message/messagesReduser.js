import {ADD_MESSAGE} from "./messageAction";

const initialState = {
    // to be stored like this {[chatId]: [{id, text, author}]}
    messageList: {},
};

export const messagesReducer = (state = initialState, action) => {
        switch (action.type) {
        case ADD_MESSAGE: {
            const currentList = state.messageList[action.chatId] || [];
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.chatId]: [
                        {
                            text: action.text,
                            id: `${action.chatId}${currentList.length}`,
                            author: action.author,
                        },
                        ...currentList,
                    ],
                },
            };
        }
        default:
            return state;
    }
};
