/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Card,
  CardItem,
  Text,
  View,
  Button,
  Content,
  Left,
  Body,
  Right,
  Icon,
  Header,
  Form,
  Item,
  Textarea,
  Picker,
} from 'native-base';
import {Styles} from './AppointStyle';
import {strings as AppStrings} from './../../strings';
import HomePageBox from '../../components/homePageBox';
import {getDay, Colours} from '../../utils';
import { ScrollView } from 'react-native';

const strings = AppStrings.signupScreen;

export default class AppointmentScreen extends Component {
  constructor(props) {
    super(props);
  }

  state = {
      noAppointments: true,
  };

  set = (v) => {
      this.setState(v);
  }

  onTypeChange = (text) => {
      this.set(text);
  }

  render() {
    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <Content contentContainerStyle={{flex: 1}}>
                <Header>
                    <Left style={{backgroundColor: 'black'}}>
                        <Button icon style={{elevation: 0, alignItems: 'flex-start'}} onPress={() => this.props.navigation.goBack()}>
                            <Icon name="ios-arrow-back" style={{color: 'white', fontSize: 35}}/>
                        </Button>
                    </Left>
                    <Body style={{alignItems: 'center', flex: 1}}>
                        <Text style={{alignSelf: 'stretch', textAlign: 'center', color: Colours.white, fontSize: 18}}>Appointments</Text>
                    </Body>
                    <Right>
                        <Button icon style={{elevation: 0}}>
                            <Icon name="ios-add" style={{marginLeft: 10,color: 'white', fontSize: 35}}/>
                        </Button>
                    </Right>
                </Header>
                <View style={[{flexWrap: 'wrap', padding: 0, borderWidth: 0, width: '100%', height: '100%' }]}>
                {/* <View style={{flex:0.2, width: '100%', height: 120, alignSelf: 'stretch'}}></View> */}
                <View style={{flex: 1, backgroundColor: '#eee', width: '100%', paddingRight: 10, paddingTop: 10}}>
                    {
                        this.state.noAppointments &&
                        <View style={{flex: 1, width: '100%', height: '100%'}}>
                            <View style={{alignSelf: 'center',  height: '60%', justifyContent: 'center', padding: 20}}>
                            <Text style={{alignSelf: 'center', width: '100%', fontWeight: 'bold', marginLeft: 10, marginRight: 10, textAlignVertical: 'center'}}>Manage your appointments</Text>
                            <Text style={{fontSize: 14, textAlign: 'center', paddingTop: 10}}>List your appointment and get a reminder before time</Text>  
                            </View>
                            
                            <Button rounded style={{alignItems: 'center', width: '80%', alignSelf: 'center'}}>
                            <Text style={{ width: '100%', height: '100%', textAlign: 'center', textAlignVertical: 'center',alignSelf: 'stretch'}}>Add an appointnment</Text>
                            </Button>
                        </View>
                                    
                    }
                </View>
                
                </View>
            </Content>
        </ScrollView>
        
        
    );
  }
}
