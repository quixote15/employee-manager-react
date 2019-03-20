import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS } from "../types";

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: '',
}

export const EmployeeUpdate = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case EMPLOYEE_UPDATE:   
            return {...state, [action.payload.props]: action.payload.value}
        
        case EMPLOYEES_FETCH_SUCCESS:
            return {...state, employees: action.payload}

        case EMPLOYEE_CREATE:
            return INITIAL_STATE; //RESET FORM
        default:
            return state;
    }
}