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
                  backgroundColor: 'red',
                  height: 50,
                  width: 50,
                },
              ]}
            />
            <Text style={{textAlignVertical: 'center', height: '100%',alignSelf: 'center', marginLeft: 20, color: 'white'}}>Guest</Text>
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
