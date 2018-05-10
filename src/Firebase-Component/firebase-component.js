import React, { Component } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


const config = {
    apiKey: "AIzaSyBa7J-oal6XYrNhdrq81CeVk7hW0EyqOsY",
    authDomain: "newfirebase-a40b6.firebaseapp.com",
    databaseURL: "https://newfirebase-a40b6.firebaseio.com",
    projectId: "newfirebase-a40b6",
    storageBucket: "",
    messagingSenderId: "801737575483"
};


firebase.initializeApp(config);


class MyComponent extends React.Component {
  state = {
    isSignedIn: false,
    userProfile: null
  };
  
  componentDidMount() {
  
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user, userProfile: user });
    });

    this.firebaseRef = firebase.database().ref('/name');
    this.firebaseCallback = this.firebaseRef.on('value', (snap) => {      
      this.setState({ someData: snap.node_.value_ });
      console.log(snap);
      console.log(snap.val());
    });
  }
  
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }
  
  render(){
    return (
      <div>{this.state.someData}</div>
    )
  }
 
}

export default MyComponent;

// ReactDOM.render(<MyComponent/> , document.getElementById('root'));