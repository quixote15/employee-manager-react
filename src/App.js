import {registerRootComponent} from 'expo'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';
import Router from './Router'

class App extends React.Component {
  
  componentWillMount(){
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyD5CvhKJxvNGlzncJT_q6uAtsFcQIBD8I4',
      authDomain: 'employee-de4d9.firebaseapp.com',
      databaseURL: 'https://employee-de4d9.firebaseio.com',
      projectId: 'employee-de4d9',
      storageBucket: 'employee-de4d9.appspot.com',
      messagingSenderId: '10416058987'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <View style={{flex: 1}} >
          <Router />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default registerRootComponent(App);