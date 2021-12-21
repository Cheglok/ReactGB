export const ADD_MESSAGE = "ADD_MESSAGE";

const timers = {};

export const addMessage = (chatId, text, author) => ({
    type: ADD_MESSAGE,
    chatId: chatId,
    text: text,
    author,
});

export const addMessageWithThunk = (chatId, message, author) => (dispatch, getState) => {
    dispatch(addMessage(chatId, message, author));
    if (author !== 'bot') {
        if(timers[chatId]) {
            clearTimeout(timers[chatId])
        }

        timers[chatId] = setTimeout(() => dispatch(
            addMessage(chatId, `Привет, ${author} это thunk...`, 'bot')
        ), 4000);
    }
};