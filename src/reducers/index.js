import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer'
import {EmployeeUpdate} from './EmployeeReducer'
export default combineReducers({

    auth: AuthReducer,
    formReducer: EmployeeUpdate
})