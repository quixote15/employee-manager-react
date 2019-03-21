import React from 'react'
import {Scene, Router, Actions} from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeEdit from './components/EmployeeEdit';
import EmployeeCreateForm from './components/EmployeeCreate';


const RouterComponent = () =>{
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please login" initial />
                </Scene>

                <Scene key="main" >
                    <Scene 
                    rightTitle="Add"
                    onRight={()=>Actions.employeeCreate()}
                    key="employeeList" 
                    component={EmployeeList} 
                    title="Employees"  />

                    <Scene 
                    key="employeeCreate"
                    component={EmployeeCreateForm}
                    title="Employee create"  />
                    <Scene 
                    key="employeeEdit"
                    component={EmployeeEdit }
                    title="Edit employee"  />
                </Scene>        
            </Scene>
        </Router>
    )
}


export default RouterComponent