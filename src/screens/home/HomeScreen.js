/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Card,
  CardItem,
  Text,
  View,
  Button,
} from 'native-base';
import {Styles} from './HomeStyles';
import {strings as AppStrings} from './../../strings';
import HomePageBox from '../../components/homePageBox';
import {getDay} from '../../utils';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const strings = AppStrings.signupScreen;

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    console.log("props", props);
  }

  state = {
    noMeds: true
  };

  componentDidMount() {
    // this.props.navigation.goBack();
  }

  render() {
    return (
        <View style={[{flexWrap: 'wrap', padding: 0, borderWidth: 0, width: '100%', height: '100%' }]}>
          <View style={{flex:0.2, width: '100%', height: 120, alignSelf: 'stretch'}}></View>
          <View style={{flex: 1}}>
            {
              this.state.noMeds &&
              <View style={{flex: 1, width: '100%', height: '100%'}}>
                <View style={{alignSelf: 'center',  height: '60%', justifyContent: 'center', padding: 20}}>
                  <Text style={{alignSelf: 'center', width: '100%', fontWeight: 'bold', marginLeft: 10, marginRight: 10, textAlignVertical: 'center'}}>Monitor your med schedule</Text>
                  <Text style={{fontSize: 14, textAlign: 'center', paddingTop: 10}}>View your daily schedule and mark your meds when taken</Text>  
                </View>
                
                <Button rounded style={{alignItems: 'center', width: '80%', alignSelf: 'center'}} onPress={() => this.props.navigation.navigate('Login')}>
                  <Text style={{ width: '100%', height: '100%', textAlign: 'center', textAlignVertical: 'center',alignSelf: 'stretch'}}>Add a med</Text>
                </Button>
              </View>
                          
            }
            
            
          </View>
          
        </View>
    );
  }
}

export default HomeScreen;
