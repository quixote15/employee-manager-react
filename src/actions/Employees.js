import {
    EMPLOYEES_FETCH_SUCCESS,
     EMPLOYEE_SAVE_SUCCESS} from '../types'
import firebase from 'firebase'
import {Actions} from 'react-native-router-flux';


export const employeesFetch = ()=>{
    const {currentUser} = firebase.auth();
    return (dispatch) =>{
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot =>{
                dispatch({type: EMPLOYEES_FETCH_SUCCESS,payload: snapshot.val()})
            })
    }
}


export const employeeSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();
  
    return (dispatch) => {
      firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .set({ name, phone, shift })
        .then(() => {
          dispatch({ type: EMPLOYEE_SAVE_SUCCESS });

         Actions.pop();
         //Actions.employeeList({ type: 'reset' });
        })
        .catch(error =>{
            console.log(error)
        });
    };
  };
  
  
  export const employeeDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();
  
    return () => {
      firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .remove()
        .then(() => {
          Actions.pop();
        });
    };
  };