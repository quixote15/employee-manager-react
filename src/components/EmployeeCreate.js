import React, {Component} from 'react';
import { View,Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {

    render(){
        return (
         <Card>
             <CardSection>
                <Input label="Name" placeholder="Joseph" />
             </CardSection>

             <CardSection>
                <Input label="Phone" placeholder="5555-5555" />
             </CardSection>

             <CardSection>

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


export default EmployeeCreate;