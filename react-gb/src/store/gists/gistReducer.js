import {STATUSES, GET_GISTS_REQUEST, GET_GISTS_SUCCESS, GET_GISTS_FAILURE} from "./gistsActions";

const initialState = {
    gists: [],
    request: STATUSES.IDLE,
    error: null,
};


export const gistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GISTS_REQUEST:
            return {
                ...state,
                request: STATUSES.REQUEST,
                loading: true,
            };
        case GET_GISTS_SUCCESS:
            return {
                ...state,
                gists: action.payload,
                request: STATUSES.SUCCESS,
                loading: false,
            };
        case GET_GISTS_FAILURE:
            return {
                ...state,
                error: action.payload,
                request: STATUSES.FAILURE,
                loading: false,
            };
        default:
            return state;

    }
};
