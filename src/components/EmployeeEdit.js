import _ from 'lodash';
import React, {Component} from 'react';
import { Card, CardSection, Input, Button, Confirm } from './common';
import { connect} from 'react-redux';
import {employeeSave,employeeUpdate, employeeDelete} from '../actions';
import EmployeeForm from './EmployeeForm';
import Communications from 'react-native-communications'



class EmployeeEdit extends Component {

    state = {showModal: false};

    componentWillMount(){
        _.map(this.props.employee, (value, props) =>{
            this.props.employeeUpdate({props, value}); //fake the filling of state
        })
    }

    onButtonPress(){
        const {name, phone, shift} = this.props;
        this.props.employeeSave({name,phone,shift, uid: this.props.employee.uid});
    }

    onSendTextClick(){
        let {phone, shift} = this.props;
        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    onAccept(){
        console.log( this.props.employee.uid)
        this.props.employeeDelete({uid: this.props.employee.uid});
        this.setState({showModal: false})
    }

    onDecline(){
        this.setState({showModal: false})
    }


    render(){
        return (
         <Card>
             <EmployeeForm {...this.props}/>
             <CardSection>
                <Button onPress={this.onButtonPress.bind(this)}>
                    Save
                </Button>
             </CardSection>

             <CardSection>
                 <Button onPress={this.onSendTextClick.bind(this)}>
                     Send Message
                 </Button>
             </CardSection>
             <CardSection>
                 <Button onPress={()=>this.setState({showModal: !this.state.showModal})}>
                     Fire Employee
                 </Button>
             </CardSection>
             <Confirm 
                onAccept={this.onAccept.bind(this)}
                onDecline={this.onDecline.bind(this)}
             visible={this.state.showModal}></Confirm>
         </Card>

        )
    }
}

const mapStateToProps = (state)=>{
    const {name, phone, shift} = state.formReducer;
    return {name,phone, shift};
}


export default connect(mapStateToProps, {
    employeeSave,
    employeeUpdate,
    employeeDelete})(EmployeeEdit);