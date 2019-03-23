import React from 'react'
import {Scene, Router, Actions,Stack} from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeEdit from './components/EmployeeEdit';
import EmployeeCreateForm from './components/EmployeeCreate';


const RouterComponent = () =>{
    return (
        <Router>
            <Stack key="mainApp">

                <Scene key="root" hideNavBar>
                    <Scene key="auth">
                        <Scene key="login" component={LoginForm} title="Please login"  />
                    </Scene>

                    <Scene key="main" >
                        <Scene 
                        key="employeeList" 
                        rightTitle="Add"
                        onRight={()=>Actions.employeeCreate()}
                        component={EmployeeList} 
                        title="Employees"
                        initial  />

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
            </Stack>
        </Router>
    )
}


export default RouterComponent