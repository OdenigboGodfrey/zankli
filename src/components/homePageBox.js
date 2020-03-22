import React, {Component} from 'react';
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  View,
  Icon,
  Header,
} from 'native-base';
import {StyleSheet} from 'react-native';

export default class HomePageBox extends Component {
  constructor(props) {
    super(props);
  }

  state = {};

  render() {
    return (
      <View style={[{width: 120, height: 150, marginLeft: 10, marginTop: 5,}]}>
        <View style={[{flex: 0.5, width: '80%'}]}>
        <View
          style={[
            {
              width: '100%',
              height: '100%',
              alignSelf: 'center',
              padding: 5,
              backgroundColor: 'green'
            },
          ]}>
          <Icon
            name="person"
            style={[
              {
                color: 'white',
                alignSelf: 'center',
                justifyContent: 'center',
                fontSize: 45,
              },
            ]}
          />
        </View>
        </View>
        <View style={[{alignSelf: 'stretch', flex: 0.5}]}>
          <Text
            style={[
              {
                flex: 1,
                marginTop: 2,
                fontSize: 14,
                flexWrap: 'nowrap',
                height: null,
              },
            ]}>
            Appointment
          </Text>
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({});
