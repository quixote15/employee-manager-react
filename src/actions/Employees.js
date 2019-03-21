
import {EMPLOYEE_UPDATE,EMPLOYEE_CREATE,EMPLOYEES_FETCH_SUCCESS} from '../types'
import firebase from 'firebase'


export const employeesFetch = ()=>{
    const {currentUser} = firebase.auth();
    return (dispatch) =>{
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot =>{
                dispatch({type: EMPLOYEES_FETCH_SUCCESS,payload: snapshot.val()})
            })
    }
}