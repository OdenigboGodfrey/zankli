/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Container,
  Content,
  CardItem,
  Text,
  Body,
  Icon,
  Button,
  View,
  Input,
  Item,
  Form,
  Header,
  Left,
  Right,
} from 'native-base';
import TabNavigation from '../../navigations/TabNavigation';
import { Image } from 'react-native';

export default class ContainerScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Header>
          <Left style={{flexDirection: 'row', justifyContent: 'center',}}>
            <View
              style={[
                {
                  borderRadius: 50,
                  height: 50,
                  width: 50,
                },
              ]}
            >
              {/* <Icon name="ios-person" style={{height: 50, width: 50, alignSelf: 'center', marginLeft: 25, marginRight: 0, fontSize: 35, marginTop: '15%', color: 'white'}} /> */}
              <Image source={require('./../../../assets/images/no_profile_pic.png')} style={{resizeMode: 'contain', height: 50, width: 50,alignSelf: 'center', marginRight: 10,}} />
            </View>
            
            <Text style={{textAlignVertical: 'center', height: '100%',alignSelf: 'center', marginLeft: 2, color: 'white'}}>Guest</Text>
          </Left>
          <Right> 
            <Button icon style={{shadowOffset: {width: 0, height: 0}, elevation: 0}}>
            <Icon name="ios-notifications-off" style={{marginLeft: 20,color: 'white'}}/>
            </Button>
              <Button icon style={{elevation: 0}}>
              <Icon name="ios-add" style={{marginLeft: 10,color: 'white', fontSize: 35}}/>
              </Button>
              
          </Right>
        </Header>
        <TabNavigation style={{flex: 1, width: '100%', height: '100%'}} />
      </Container>
    );
  }
}
