import {SHOW_NAME, PROFILE_UPDATE} from "../actions/prifileActions"

const initialState = {
    showName: false,
    name: "Misha Cheglok"
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_NAME:
            return {...state, showName: !state.showName}
        case PROFILE_UPDATE:
            return {...state, entries: action.payload}
        default:
            return state;
    }

}