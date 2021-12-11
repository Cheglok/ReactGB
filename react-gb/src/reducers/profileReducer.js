import {SHOW_NAME, CHANGE_NAME} from "../actions/profileActions"

const initialState = {
    showName: false,
    name: "Misha Cheglok"
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_NAME:
            return {...state, showName: !state.showName}
        case CHANGE_NAME:
            return {...state, name: action.payload}
        default:
            return state;
    }

}