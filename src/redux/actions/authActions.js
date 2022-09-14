import { ActionTypes } from "../constants/actiontypes";

export const login = (user) => {
    console.warn("action called", ActionTypes.LOGIN);
    return {
        type: ActionTypes.LOGIN,
        user,
    };
};
export const logout = (user) => {
    console.warn("action called", ActionTypes.LOGOUT);
    return {
        type: ActionTypes.LOGIN,
    };
};