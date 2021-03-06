import React, {Component} from 'react';
import { Card, CardSection, Input, Button } from './common';
import { connect} from 'react-redux';
import {employeeUpdate ,employeeCreate} from '../actions';
import EmployeeForm from './EmployeeForm';


class EmployeeCreateForm extends Component {

    onButtonPress(){
        const {name, phone, shift} = this.props;
        this.props.employeeCreate({name,phone,shift: shift || 'Monday'});
    }

    render(){
        return (
         <Card>
             <EmployeeForm {... this.props}/>
             <CardSection>
                <Button onPress={this.onButtonPress.bind(this)}>
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

export default connect(mapStateToProps, 
    {employeeUpdate,employeeCreate})
(EmployeeCreateForm);