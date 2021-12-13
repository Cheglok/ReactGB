import {ADD_MESSAGE, addMessage} from "../store/message/messageAction";

export const botMiddleware = store => next => action => {
    if (action.type === ADD_MESSAGE && action.author !== 'bot') {
        const {author, chatId} = action;
        setTimeout(() => store.dispatch(
            addMessage(chatId, `Привет ${author}, это бот...`, 'bot')
        ), 1000);
    }
    return next(action);
}