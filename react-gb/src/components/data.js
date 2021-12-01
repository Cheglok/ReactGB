const chats = [
    {
        name: "Jack",
        id: 1
    },
    {
        name: "Jill",
        id: 2
    },
    {
        name: "Hijo",
        id: 3
    },
    {
        name: "Hija",
        id: 4
    },
];

export function getChats() {
    return chats;
}

export function getChat(id) {
    return chats.find(
        chat => chat.id === id
    )
}
