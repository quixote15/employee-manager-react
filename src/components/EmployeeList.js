import React, {Component} from 'react';
import { View,Text } from 'react-native';
import {connect} from 'react-redux';
import {employeesFetch} from '../actions'

class EmployeeList extends Component {
    componentWillMount(){
        console.log(this.props.employeesFetch())

    }

    render(){
        return (
         <View>
             <Text>Employee</Text>
             <Text>Employee</Text>
             <Text>Employee</Text>
             <Text>Employee</Text>
             <Text>Employee</Text>
             <Text>Employee</Text>
             <Text>Employee</Text>
             <Text>Employee</Text>
         </View>
        )
    }
}


export default connect(null, {employeesFetch})(EmployeeList);