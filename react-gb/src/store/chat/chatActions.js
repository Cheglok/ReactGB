export const ADD_CHAT = "ADD_CHAT";
export const REMOVE_CHAT = "REMOVE_CHAT";

export const addChat = (name) => ({
    type: ADD_CHAT,
    name,
});

export const removeChat = (id) => ({
    type: REMOVE_CHAT,
    id,
})
