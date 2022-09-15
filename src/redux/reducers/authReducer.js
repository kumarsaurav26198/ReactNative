import { ActionTypes } from "../constants/actiontypes";
const initialAuthState = { isLoggedIn: false };

export const authReducer = (state = initialAuthState, action) => {
    switch (ActionTypes.type)
    {
        case ActionTypes.LOGIN:
            return { ...state, isLoggedIn: true, user: action.user };
        case ActionTypes.LOGOUT:
            AsyncStorage.removeItem('@loggedInUserID:id');
            AsyncStorage.removeItem('@loggedInUserID:key');
            AsyncStorage.removeItem('@loggedInUserID:password');
            return { ...state, isLoggedIn: false, user: {} };
        default:
            return state;
    }
};