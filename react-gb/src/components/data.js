import {useState} from "react";

let chatsInit = [
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
    return chatsInit;
}

export function getChat(id) {
    return chatsInit.find(
        chat => chat.id === id
    )
}

// export function addChat(UserName) {
//     console.log("run");
//     const newId = new Date().getMilliseconds();
//     chats.push({name: UserName, id: newId});
//     console.log(chats);
// }
export function removeChat(id) {
    chatsInit = chatsInit.filter(chat => chat.id !== id);
    console.log(chatsInit);
}