import {combineReducers} from 'redux';

import {chatsReducer} from "./chat/chatsReducer";

import {profileReducer} from "./profile/profileReducer";

import {messagesReducer} from "./message/messagesReduser"

export const rootReducer = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReducer,
})