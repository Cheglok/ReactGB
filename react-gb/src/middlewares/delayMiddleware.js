import {GET_GISTS_DELAY, getGistsEnd} from "../store/gists/gistsActions";

export const delayMiddleware = store => next => action => {
    if (action.type === GET_GISTS_DELAY) {
        setTimeout(() => store.dispatch(
            getGistsEnd()
        ), 500);
    }
    return next(action);
}