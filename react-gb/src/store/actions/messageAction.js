export const ADD_MESSAGE = "ADD_MESSAGE";

export const addMessage = (chatId, text, author) => ({
    type: ADD_MESSAGE,
    chatId: chatId,
    text: text,
    author,
});