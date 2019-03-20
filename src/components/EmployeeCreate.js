import React, {Component} from 'react';
import { View,Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { connect} from 'react-redux';
import {employeeUpdate} from '../actions';
import {Picker} from 'react-native';


class EmployeeCreate extends Component {

    render(){
        return (
         <Card>
             <CardSection>
                <Input label="Name" 
                placeholder="Joseph" 
                value={this.props.name}
                onChangeText={value => this.props.employeeUpdate({props:'name', value})} />
             </CardSection>

             <CardSection >
                <Input label="Phone" 
                placeholder="5555-5555" 
                value={this.props.phone}
                onChangeText={value => this.props.employeeUpdate({props:'phone', value})}
                 />
             </CardSection>

             <CardSection style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                 <Text style={styles.pickerTextStyles}>
                     Shift
                 </Text>
                <Picker
                style={{flex: 0.5}}
                    selectedValue={this.props.shift}
                    onValueChange={value => this.props.employeeUpdate({props: 'shift', value})}
                >
                    <Picker.Item label="Monday" value="Monday"></Picker.Item>
                    <Picker.Item label="Tuesday" value="Tuesday"></Picker.Item>
                    <Picker.Item label="Wednesday" value="Wednesday"></Picker.Item>
                    <Picker.Item label="Thursday" value="Thursday"></Picker.Item>
                    <Picker.Item label="Friday" value="Friday"></Picker.Item>
                    <Picker.Item label="Saturday" value="Saturday"></Picker.Item>
                    <Picker.Item label="Sunday" value="Sunday"></Picker.Item>
                </Picker>
             </CardSection>
             
             <CardSection>
                <Button>
                    Save
                </Button>
             </CardSection>
         </Card>
        )
    }
}

const mapStateToProps = (state)=>{
    const {name, phone, shift} = state.formReducer;
    return {name,phone, shift};
}

const styles = {
    pickerTextStyles :{
        fontSize: 18,
        paddingLeft: 20,
        alignSelf: 'center'
    }
}

export default connect(mapStateToProps, {employeeUpdate})(EmployeeCreate);