import {combineReducers} from 'redux';

import {chatsReducer} from "./chats";

import const rootReducer = combineReducers({
    chats: chatsReducer,
    // profile: prifileReducer,
})