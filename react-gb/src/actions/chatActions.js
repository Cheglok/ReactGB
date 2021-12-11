// export const CHATS_LOAD = "CHATS_LOAD";
// export const CHATS_MESSAGE_SEND = "CHATS_MESSAGE_SEND";
export const ADD_CHAT = "ADD_CHAT";
export const REMOVE_CHAT = "REMOVE_CHAT";

// export const chatsLoadAction = () => ({
//     type: CHATS_LOAD
// });
//
// export const chatsMessageSendAction = (message) => ({
//             type: CHATS_MESSAGE_SEND,
//             payload: message
//         });

export const addChat = (name) => ({
    type: ADD_CHAT,
    name,
});

export const removeChat = (id) => ({
    type: REMOVE_CHAT,
    id,
})
