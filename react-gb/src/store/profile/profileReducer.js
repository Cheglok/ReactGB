import {SHOW_NAME, CHANGE_NAME} from "./profileActions"

const initialState = {
    showName: true,
    userName: "Misha Cheglok"
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_NAME:
            return {...state, showName: !state.showName}
        case CHANGE_NAME:
            return {...state, userName: action.payload}
        default:
            return state;
    }

}