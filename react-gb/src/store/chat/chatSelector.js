export function getChatList(state) {
    return state.chats.chatList;
}

export function getChat(chatId) {
    return (state) => state.chats.chatList[chatId];
}