import { produce } from "immer"
import { authAPI } from "../API/api"

const SET_USER_DATA = "SET_USER_DATA"
const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE"

const initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    errorMessage: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:

            return produce(state, draft => {
                draft.userId = action.data.userId;
                draft.email = action.data.email;
                draft.login = action.data.login;
                draft.isAuth = action.data.isAuth;
            })

        case SET_ERROR_MESSAGE:
            return produce(state, draft => {
                draft.errorMessage = action.errorMessage
            })

        default:
            return state
    }
}

export const setUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } })

export const setErrorMessage = (errorMessage) => ({ type: SET_ERROR_MESSAGE, errorMessage })

export const getUserAuth = () => async (dispatch) => {
    let data = await authAPI.setUserAuthData()
    if (data.resultCode === 0) {
        let { id, email, login } = data.data
        dispatch(setUserData(id, email, login, true))
    }
    else { console.log('rrrr'); }

}

export const setLogin = (email, password, rememberMe) => {
    return async (dispatch) => {
        let responce = await authAPI.login(email, password, rememberMe)
        if (responce.resultCode == 0) {
            console.log('Success');
            dispatch(getUserAuth())
        }
        else {
            let errorMessage = responce.messages.length > 0 ? responce.messages[0] : 'Some unknown error'
            dispatch(setErrorMessage(errorMessage))
        }
    }
}

export const setLogout = () => {
    return async (dispatch) => {
        let responce = await authAPI.logout()
        if (responce.resultCode === 0) {
            dispatch(setUserData(null, null, null, false))
        }
    }
}

export default authReducer