import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS } from "../types";

const INITIAL_STATE = {

}

export const employeesFetch= (state = INITIAL_STATE, action) =>{
    switch(action.type){
      
        case EMPLOYEES_FETCH_SUCCESS:
            return action.payload

        default:
            return state;
    }
}