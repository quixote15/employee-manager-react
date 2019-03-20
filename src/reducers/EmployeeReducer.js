import { EMPLOYEE_UPDATE } from "../types";

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: '',
}

export const EmployeeUpdate = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case EMPLOYEE_UPDATE:   
            return {...state, [action.payload.props]: action.payload.value}

        default:
            return state;
    }
}