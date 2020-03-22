/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import SignupScreen from './src/screens/signup/SignupScreen';
import LoginScreen from './src/screens/login/LoginScreen';
import HomeScreen from './src/screens/home/HomeScreen';
import ContainerScreeen from './src/screens/container/ContainerScreen';
import { Root } from 'native-base';
import SwitchNavigator  from './src/navigations/SwitchNavigator';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Root>
        <SwitchNavigator navigation={this.props.navigation}/>
        {/* <HomeScreen /> */}
        {/* <HomeScreen />  */}
       {/* <LoginScreen />  */}
      </Root>
  
    );
  }
  




};

export default App;
