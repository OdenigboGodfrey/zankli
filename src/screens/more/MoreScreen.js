import React, {Component} from 'react';
import {
  Content,
  ListItem,
  Left,
  Button,
  Icon,
  Body,
  Text,
  Right,
  Separator,
} from 'native-base';
import {Switch} from 'react-native';

export default class MoreScreen extends Component {
  constructor(props) {
    super(props);
    console.log("props", JSON.stringify(props));
  }

  render() {
    return (
      <Content>
        <Separator bordered />
        <ListItem
          icon
          onPress={() => {
            console.log("Add measurement", 1);
            this.props.navigation.navigate('AddMeasurement');
            }}>
          <Left>
            <Button style={{backgroundColor: 'white'}}>
              <Icon active name="heart" style={{color: 'black'}} />
            </Button>
          </Left>
          <Body>
            <Text>Measurements</Text>
          </Body>
          <Right>
            <Icon active name="ios-arrow-forward" style={{color: 'black'}} />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{backgroundColor: 'white'}}>
              <Icon active name="ios-book" style={{color: 'black'}} />
            </Button>
          </Left>
          <Body>
            <Text>Dairy</Text>
          </Body>
          <Right>
            <Icon active name="ios-arrow-forward" style={{color: 'black'}} />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{backgroundColor: 'white'}}>
              <Icon active name="ios-alarm" style={{color: 'black'}} />
            </Button>
          </Left>
          <Body>
            <Text>Appointments</Text>
          </Body>
          <Right>
            <Icon active name="ios-arrow-forward" style={{color: 'black'}} />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{backgroundColor: 'white'}}>
              <Icon active name="ios-settings" style={{color: 'black'}} />
            </Button>
          </Left>
          <Body>
            <Text>Settings</Text>
          </Body>
          <Right>
            <Icon active name="ios-arrow-forward" style={{color: 'black'}} />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{backgroundColor: 'white'}}>
              <Icon active name="ios-log-out" style={{color: 'black'}} />
            </Button>
          </Left>
          <Body>
            <Text>Logout</Text>
          </Body>
          <Right>
            <Icon active name="ios-arrow-forward" style={{color: 'black'}} />
          </Right>
        </ListItem>
      </Content>
    );
  }
}
