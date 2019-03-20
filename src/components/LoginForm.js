import React, {Component} from 'react';
import { View,Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, SignIn } from '../actions';


import {Card, CardSection, Input, Button, Spinner} from './common'

class LoginForm extends Component {

    onEmailChange(text){
        this.props.emailChanged(text) //action dispatch
    }

    onPasswordChanged(text){
        this.props.passwordChanged(text)
    }

    onButtonPress(){
        const {email, password} = this.props;
        this.props.SignIn({email,password});

    }

    renderButton(){
        if(this.props.loading){
            return (
                <Spinner size="large" />
            )
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        )
    }


    renderError(){
        if(this.props.error){
            return (
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>{this.props.error}</Text>
                </View>
            )
        }
    }

    render(){
        return (
            <Card>
                <CardSection>
                    <Input 
                        onChangeText={this.onEmailChange.bind(this)}
                        label="Email"
                        placeholder="email@exemple.comm"
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                <Input 
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChanged.bind(this)}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                  {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    }
}


const styles = {
    errorTextStyle: {
        fontSize: 12,
        alignSelf: 'center',
        color: 'red'
    }
}
export default connect(mapStateToProps, 
    {emailChanged, passwordChanged,SignIn})(LoginForm)