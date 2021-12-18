import {combineReducers} from 'redux';

import {chatsReducer} from "./chat/chatsReducer";
import {profileReducer} from "./profile/profileReducer";
import {messagesReducer} from "./message/messagesReduser"
import {gistsReducer} from "./gists/gistReducer"

export const rootReducer = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReducer,
    gists: gistsReducer
})