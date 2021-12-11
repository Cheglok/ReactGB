import {combineReducers} from 'redux';

import {chatsReducer} from "./chatsReducer";

import {profileReducer} from "./profileReducer";

import {messagesReducer} from "./messagesReduser"

export const rootReducer = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReducer,
})