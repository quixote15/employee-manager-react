import {EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN} from '../types'


const INITIAL_STATE = {
    email: 'user@user.com',
    password: 'password',
    user: null,
    error: '',
    loading: false
}

export default (state = INITIAL_STATE, action) =>{
    //console.log(action)
    switch(action.type){
        case EMAIL_CHANGED:
            return {...state,email:action.payload}

        case PASSWORD_CHANGED:
            return { ...state, password: action.payload}

        case USER_LOGIN:
            return { ...state, loading: true}
        case USER_LOGIN_SUCCESS:
            return { ...state, ...INITIAL_STATE,user: action.payload}
        case USER_LOGIN_FAIL:
            return {...state, error: 'Authentication failed', loading: false}

        default:
            return state; 
    }
}