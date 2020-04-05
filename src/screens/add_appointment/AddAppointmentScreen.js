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
  Separator,
} from 'native-base';
import {Styles} from './AddAppointmentStyle';
import {strings as AppStrings} from './../../strings';
import HomePageBox from '../../components/homePageBox';
import {getDay, Colours} from '../../utils';
import { ScrollView } from 'react-native';
<<<<<<< HEAD
import { SpinnerButton } from '../../components/SpinnerButton';
=======
>>>>>>> 648065c910abf7e1ff17095b28b2d5f528468bcf

const strings = AppStrings.signupScreen;

export default class AddAppointmentScreen extends Component {
  constructor(props) {
    super(props);
  }

  state = {
      noAppointments: true,
<<<<<<< HEAD
      typeSelected: 'Doctor',
      btnClicked: false
=======
      typeSelected: 'Doctor'
>>>>>>> 648065c910abf7e1ff17095b28b2d5f528468bcf
  };

  set = (v) => {
    //   this.setState(v);
  }

  onTypeChange = (text) => {
      this.set(text);
  }

<<<<<<< HEAD
  onBookPress = () => {
      this.set({btnClicked: true});
      this.set({btnClicked: false});
  }

=======
>>>>>>> 648065c910abf7e1ff17095b28b2d5f528468bcf
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
                        <Text style={{alignSelf: 'stretch', textAlign: 'center', color: Colours.white, fontSize: 17}}>Add Appointments</Text>
                    </Body>
                    <Right>
<<<<<<< HEAD
=======
                        <Button icon style={{elevation: 0, borderWidth: 0}}>
                            <Icon name="ios-save" style={{marginLeft: 10,color: 'white', fontSize: 25}}/>
                        </Button>
>>>>>>> 648065c910abf7e1ff17095b28b2d5f528468bcf
                    </Right>
                </Header>
                <View style={[{flexWrap: 'wrap', padding: 0, borderWidth: 0, width: '100%', height: '100%' }]}>
                {/* <View style={{flex:0.2, width: '100%', height: 120, alignSelf: 'stretch'}}></View> */}
<<<<<<< HEAD
                <View style={{flex: 1, backgroundColor: '#eee', width: '100%' }}>
                    <Form>
                        <Separator style={{backgroundColor: '#fff'}}>
                            <Text style={{fontSize: 14}}>Book an appointment with a Doctor</Text>
                        </Separator>
                        <View style={{marginTop: 30,backgroundColor: '#fff'}}>
                            <Item 
                                style={{marginBottom: 15, paddingRight: 15, paddingLeft: 10, paddingBottom: 10, paddingTop: 10}}
                                >
                                <Left>
                                    <Text>Speciality</Text>
                                    <Text style={{fontSize: 12}}>Select speciality</Text>
                                </Left>
                                <Right>
                                    <Picker 
                                        mode={'dropdown'}
                                        iosIcon={<Icon name={'ios-arrow-down'} />}
                                        style={{ alignSelf: 'stretch', height: 40 }}
                                        headerStyle={{ backgroundColor: "#b95dd3" }}
                                        headerBackButtonTextStyle={{ color: "#fff" }}
                                        headerTitleStyle={{ color: "#fff" }}
                                        placeholderStyle={{color: '#aaa'}}
                                        itemTextStyle={{color: '#aaa'}}
                                        onValueChange={this.onTypeChange.bind(this)}
                                        selectedValue={this.state.typeSelected}
                                    >
                                        <Picker.Item label={'General'} value={'General'} />
                                        <Picker.Item label={'Physical'} value={'Physical'} />
                                    </Picker>
                                </Right>
                            </Item>
                            <Item 
                            style={{marginBottom: 15, paddingRight: 15, paddingLeft: 10, paddingBottom: 10, paddingTop: 10}}
                            >
                                <Left>
                                    <Text>Doctor</Text>
                                    <Text style={{fontSize: 12}}>Select Dpctor</Text>
                                </Left>
                                <Right>
                                    <Picker 
                                            mode={'dropdown'}
                                            iosIcon={<Icon name={'ios-arrow-down'} />}
                                            style={{ alignSelf: 'stretch', height: 40 }}
                                            headerStyle={{ backgroundColor: "#b95dd3" }}
                                            headerBackButtonTextStyle={{ color: "#fff" }}
                                            headerTitleStyle={{ color: "#fff" }}
                                            placeholderStyle={{color: '#aaa'}}
                                            itemTextStyle={{color: '#aaa'}}
                                            onValueChange={this.onTypeChange.bind(this)}
                                            selectedValue={this.state.typeSelected}
                                        >
                                            <Picker.Item label={'General'} value={'General'} />
                                            <Picker.Item label={'Physical'} value={'Physical'} />
                                    </Picker>
                                </Right>
                            </Item>
                            <Item 
                            style={{marginBottom: 15, paddingRight: 15, paddingLeft: 10, paddingBottom: 10, paddingTop: 10}}
                            >
                                <Left>
                                    <Text>Time</Text>
                                    <Text style={{fontSize: 12}}>Appointment time</Text>
                                </Left>
                                <Right>
                                    <Icon name={'ios-arrow-forward'} style={{fontSize: 21}} />
                                </Right>
                            </Item>
                            <Item style={{ paddingRight: 15, paddingLeft: 10, paddingBottom: 10}}>
                                <Left>
                                    <Text>Reminder</Text>
                                    <Text style={{fontSize: 12}}>set reminder</Text>
                                </Left>
                                <Right>
                                    <Icon name={'ios-arrow-forward'} style={{fontSize: 21}} />
                                </Right>
                            </Item>
                            
                        </View>
                        <View style={{marginTop: 30,backgroundColor: '#fff'}}>
                            <Item 
                                style={{marginBottom: 0, paddingRight: 15, paddingLeft: 10, paddingBottom: 10, paddingTop: 10}}
                                >
                                    <Left>
                                        <Text>Location</Text>
                                    </Left>
                            </Item>
                        </View>
                        <View style={{marginTop: 20,backgroundColor: '#fff', paddingBottom: 0}}>
                            <Item 
                                style={{marginBottom: 0, paddingRight: 15, paddingLeft: 10, paddingBottom: 10, paddingTop: 10}}
                                >
                                    <Left>
                                        <Textarea rowSpan={4} placeholder={'Enter Notes'}/>
                                    </Left>
                            </Item>
                        </View>
                        <SpinnerButton
                            label={'Book'}
                            rounded={true}
                            style={{width: '80%', alignSelf: 'center', marginTop: 10, marginBottom: 10}}
                            btnClicked={this.state.btnClicked}
                            onPress={this.onBookPress}
                        />
=======
                <View style={{flex: 1, backgroundColor: '#eee', width: '100%', paddingRight: 10, paddingTop: 10}}>
                    <Form>
                        <Picker
                            iosIcon={<Icon name={'ios-arrow-down'} />}
                            mode={'dropdown'}
                            onValueChange={this.onTypeChange.bind(this)}
                            selectedValue={this.state.typeSelected}
                        >
                            <Picker.Item label={'General'} value={'General'} />
                            <Picker.Item label={'Physical'} value={'Physical'} />
                        </Picker>
                        <Separator style={{backgroundColor: '#ddd'}}>
                            
                        </Separator>
>>>>>>> 648065c910abf7e1ff17095b28b2d5f528468bcf
                    </Form>
                </View>
                
                </View>
            </Content>
        </ScrollView>
        
        
    );
  }
}
