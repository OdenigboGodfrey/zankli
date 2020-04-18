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
import NoteScreen from './src/screens/notes/NoteScreen';
import AddNoteScreen from './src/screens/add_note/AddNoteScreen';
import AddAppointmentScreen from './src/screens/add_appointment/AddAppointmentScreen';
import AppointmentScreen from './src/screens/appointment/AppointScreen';
import AddMedicineScreen from './src/screens/add_medicine/AddMedicineScreen';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Root>
        {/* <SwitchNavigator navigation={this.props.navigation}/> */}
        <AddMedicineScreen />
        {/* <HomeScreen /> */}
        {/* <HomeScreen />  */}
       {/* <LoginScreen />  */}
      </Root>
  
    );
  }
  




};

export default App;
