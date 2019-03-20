import {EMPLOYEE_UPDATE} from '../types'

export const employeeUpdate = ({props, value}) =>{
    return {
        type: EMPLOYEE_UPDATE,
        payload: {props, value}
    }
}

export const employeeCreate = ({name, phone, shift}) =>{
    return {
        type: EMPLOYEE_CREATE,
        payload: {name,phone, shift}
    }
}