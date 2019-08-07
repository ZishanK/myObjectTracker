import React, { Component } from 'react'
import { View, Image, StatusBar } from 'react-native'
import styles from './styles'
import firebase from "firebase";
import SplashScreen from 'react-native-splash-screen'
const config = {
  apiKey: "AIzaSyBFXP7bNhc56PEWGteiMoLe_zVLmrNYWjU",
  authDomain: "giftedchat-2f7b3.firebaseapp.com",
  databaseURL: "https://giftedchat-2f7b3.firebaseio.com",
  projectId: "giftedchat-2f7b3",
  storageBucket: "giftedchat-2f7b3.appspot.com",
  messagingSenderId: "734145682785"
};
class Splash extends Component {
  constructor(props) {
    super(props);
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    } else {
      console.log("firebase apps already running...");
    }
  }
  componentDidMount () {
    SplashScreen.hide();
   
          this.props.navigation.navigate('App')
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
      </View>
    )
  }
}

export default Splash
