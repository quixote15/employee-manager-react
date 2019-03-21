import React, {Component} from 'react';
import _ from 'lodash';
import { View,Text, ListView } from 'react-native';
import {connect} from 'react-redux';
import {employeesFetch} from '../actions'
import console = require('console');

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();
    
        this.createDataSource(this.props);
    }
    
      componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props that this component
        // will be rendered with
        // this.props is still the old set of props
    
        this.createDataSource(nextProps);
      }
    
      createDataSource({ employees }) {
        const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        });
    
        this.dataSource = ds.cloneWithRows(employees);
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

const mapStateToProps = state => {
    console.log('antes',state.employees)
    const employees = _.map(state.employees, (val, uid) => {
      return { ...val, uid };
    });

    console.log('depois',employees)
  
    return { employees };
  };

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);