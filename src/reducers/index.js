import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer'
import {EmployeeUpdate} from './EmployeeReducer'
import { employeesFetch} from './Employees'

export default combineReducers({

    auth: AuthReducer,
    formReducer: EmployeeUpdate,
    employees: employeesFetch
})