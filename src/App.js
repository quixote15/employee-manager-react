import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';

export default class App extends React.Component {

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
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
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
