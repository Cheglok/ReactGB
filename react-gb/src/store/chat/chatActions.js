export const ADD_CHAT = "ADD_CHAT";
export const REMOVE_CHAT = "REMOVE_CHAT";

export const addChat = (name, newChatId) => ({
    type: ADD_CHAT,
    name,
    newChatId,
});

export const removeChat = (id) => ({
    type: REMOVE_CHAT,
    id,
});
