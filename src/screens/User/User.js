import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'
import styles from './styles'
import firebase from "firebase";
class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location:'Object is on its current location'
    };
    this.locationRef = this.getRef().child("locationTrack");
  }
  getRef() {
    return firebase.database().ref();
  }
  static navigationOptions = {
    title: 'Object Tracker',
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: 'white'
    },
    headerStyle: {
      backgroundColor: '#f16635',
    }
  };
  listenForItems(locationRef) {
    console.log('in listenForItems')
    locationRef.on("value", snap => {
      // get children as an array
      console.log('in locationRef')
      snap.forEach(child => {
        if (child.val().isLocationChanged==1)
         {alert('Object is moved from its location')
          this.setState({location:'...CHANGED...'})
         }
      });
    });
  }
  componentDidMount () {
      this.listenForItems(this.locationRef);
  }
  componentWillUnmount() {
    this.locationRef.off();
  }
  render () {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={{alignSelf:'center'}}>{this.state.location}</Text> 
        </View>
      </View>
    )
  }
}

export default User
