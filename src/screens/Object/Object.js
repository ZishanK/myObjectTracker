import React, { Component } from 'react'
import { View, Text, StatusBar, PermissionsAndroid } from 'react-native'
import styles from './styles'
import Geolocation from 'react-native-geolocation-service';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import firebase from "firebase";
class Object1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
      recieverN: "",
      position:[],loading:true,lat:0,long:0,location:'',isflag:false
    };
    this.locationRef = this.getRef().child("locationTrack");
  }
  getRef() {
    return firebase.database().ref();
  }
  static navigationOptions = {
    title: 'Object',
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
         {
          this.setState({location:'...CHANGED...'})
         }
      });
    });
  }
async  componentDidMount () {
  this.setState({loading:true})
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        'title': 'Example App',
        'message': 'Example App access to your location '
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the location")
      //alert("You can use the location");
    } else {
      console.log("location permission denied")
      //alert("Location permission denied");
    }
  } catch (err) {
    console.log(err)
  }
        RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({interval: 10000, fastInterval: 5000})
        .then(data => {
          console.log(data)

          // Geolocation.getCurrentPosition(
        this.watchID = Geolocation.watchPosition(
        (position) => {
          firebase.database().ref("locationTrack").push({
            isLocationChanged: 0
          });
          this.setState({loading:false})
        console.log('current location: ',position);
        var lat = parseFloat(position.coords.latitude)
        var long = parseFloat(position.coords.longitude)
        if(this.state.isflag&&(this.state.lat!=lat||this.state.long!=long))
        {console.log('flag',this.state.isflag)
        firebase.database().ref("locationTrack").push({
          isLocationChanged: 1
        });
          Geolocation.stopObserving();
          
          // this.setState({location:'...CHANGED...'})
        }
        var initialRegion={
            latitude:lat,
            longitude:long,
            latitudeDelta:  0.00922*1.5,
            longitudeDelta: 0.00421*1.5
        }
        console.log('flag',this.state.isflag)
        this.state.position.push({long:long,lat:lat})
        this.setState({long,lat,initialPosition:initialRegion,origin:initialRegion,selectedLatitude:lat,selectedLongitude:long})
        this.setState({permission:true,markerPosition:initialRegion,runmarker:1})
        this.setState({isflag:true,lat:parseFloat(position.coords.latitude),long:parseFloat(position.coords.longitude)})
        console.log('flag',this.state.isflag)  
      },
        (error) => {
        // See error code charts below.
        console.log('Error',error)
        //alert(error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 2000, distanceFilter:100 }
        // { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      }).catch(err => {
        console.log('Error1: ',err)
      });
      this.listenForItems(this.locationRef);
  }
  componentWillUnmount() {
    Geolocation.clearWatch(this.watchID);
    this.locationRef.off();
    this.getRef().child("locationTrack")
                          .remove()
                          .then(function() {
                            console.log(" locationTrack Deleted.");
                          })
                          .catch(function(error) {
                            console.log("locationTrack Remove failed: " + error.message);
                          });
  }
  render () {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          {!this.state.loading?
          <View>
          <Text style={{alignSelf:'center'}}>Current Location</Text>
          <Text>Longitude: {this.state.long} Latitude: {this.state.lat} </Text>  
          <Text style={{color:'red',alignSelf:'center'}}>{this.state.location}</Text> 
          </View>       
          :<Text>Loading ...</Text>}
        </View>
      </View>
    )
  }
}

export default Object1
