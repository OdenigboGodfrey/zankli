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

const strings = AppStrings.signupScreen;

export default class AddAppointmentScreen extends Component {
  constructor(props) {
    super(props);
  }

  state = {
      noAppointments: true,
      typeSelected: 'Doctor'
  };

  set = (v) => {
    //   this.setState(v);
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
                        <Text style={{alignSelf: 'stretch', textAlign: 'center', color: Colours.white, fontSize: 17}}>Add Appointments</Text>
                    </Body>
                    <Right>
                        <Button icon style={{elevation: 0, borderWidth: 0}}>
                            <Icon name="ios-save" style={{marginLeft: 10,color: 'white', fontSize: 25}}/>
                        </Button>
                    </Right>
                </Header>
                <View style={[{flexWrap: 'wrap', padding: 0, borderWidth: 0, width: '100%', height: '100%' }]}>
                {/* <View style={{flex:0.2, width: '100%', height: 120, alignSelf: 'stretch'}}></View> */}
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
                    </Form>
                </View>
                
                </View>
            </Content>
        </ScrollView>
        
        
    );
  }
}
