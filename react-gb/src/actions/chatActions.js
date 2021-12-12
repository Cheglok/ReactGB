// export const CHATS_LOAD = "CHATS_LOAD";
// export const CHATS_MESSAGE_SEND = "CHATS_MESSAGE_SEND";
export const ADD_CHAT = "ADD_CHAT";
export const DELETE_CHAT = "DELETE_CHAT";

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

export const deleteChat = (id) => ({
    type: DELETE_CHAT,
    id,
})
