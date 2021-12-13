export const ADD_MESSAGE = "ADD_MESSAGE";

export const addMessage = (chatId, text, author) => ({
    type: ADD_MESSAGE,
    chatId: chatId,
    text: text,
    author,
});

export const addMessageWithThunk = (chatId, message, author) => (dispatch, getState) => {
    dispatch(addMessage(chatId, message, author));
    if (message.author !== 'bot') {
        setTimeout(() => dispatch(
            addMessage(chatId, `Привет, ${author} это thunk...`, 'bot')
        ), 1500);
    }
};