import React, { Component } from 'react'
import { View, Text, StatusBar, TouchableOpacity } from 'react-native'
import styles from './styles'
import firebase from "firebase";
class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
     
    };
  }
  
  static navigationOptions = {
    title: 'Open As',
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: 'white'
    },
    headerStyle: {
      backgroundColor: '#f16635',
    }
  };
  render () {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <TouchableOpacity 
          onPress={()=>{this.props.navigation.navigate('_object')}}
          style={{marginBottom:20,backgroundColor:'#f16635',justifyContent:'center', alignItems:'center',height:40,width:'100%',borderRadius:5}}>
            <Text style={{alignSelf:'center', color:'white'}}>Object</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={()=>{this.props.navigation.navigate('_user')}}
          style={{marginBottom:20,backgroundColor:'#f16635',justifyContent:'center', alignItems:'center',height:40,width:'100%',borderRadius:5}}>
            <Text style={{alignSelf:'center', color:'white'}}>User</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Dashboard
