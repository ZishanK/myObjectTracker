/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Routes from './src/navigation/Routes'
const App = () => {
  return (//#f16635
  <SafeAreaView style={{flex:1,backgroundColor:'#f16635'}}>
        <StatusBar backgroundColor="#f16635" barStyle="light-content" />
      <Routes />
      </SafeAreaView>
  )

};
export default App;
