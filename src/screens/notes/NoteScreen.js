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
} from 'native-base';
import {Styles} from './NoteStyle';
import {strings as AppStrings} from './../../strings';
import HomePageBox from '../../components/homePageBox';
import {getDay, Colours} from '../../utils';

const strings = AppStrings.signupScreen;

export default class NoteScreen extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    noNote: true
  };

  render() {
    return (
        <Content contentContainerStyle={{flex: 1}}>
            <Header>
                <Left>
                    <Button icon style={{elevation: 0}}>
                        <Icon name="ios-close" style={{marginLeft: 10,color: 'white', fontSize: 35}}/>
                    </Button>
                </Left>
                <Body style={{alignItems: 'center', flex: 1}}>
                    <Text style={{alignSelf: 'stretch', textAlign: 'center', color: Colours.white, fontSize: 18}}>Dairy</Text>
                </Body>
                <Right>
                    <Button icon style={{elevation: 0}}>
                        <Icon name="ios-add" style={{marginLeft: 10,color: 'white', fontSize: 35}}/>
                    </Button>
                </Right>
            </Header>
        <View style={[{flexWrap: 'wrap', padding: 0, borderWidth: 0, width: '100%', height: '100%' }]}>
          <View style={{flex:0.2, width: '100%', height: 120, alignSelf: 'stretch'}}></View>
          <View style={{flex: 1}}>
            {
              this.state.noNote &&
              <View style={{flex: 1, width: '100%', height: '100%'}}>
                <View style={{alignSelf: 'center',  height: '60%', justifyContent: 'center', padding: 20}}>
                  <Text style={{alignSelf: 'center', width: '100%', fontWeight: 'bold', marginLeft: 10, marginRight: 10, textAlignVertical: 'center'}}>Take Notes</Text>
                  <Text style={{fontSize: 14, textAlign: 'center', paddingTop: 10}}>Document your symptoms , health events and any medical information of importance</Text>  
                </View>
                
                <Button rounded style={{alignItems: 'center', width: '80%', alignSelf: 'center'}}>
                  <Text style={{ width: '100%', height: '100%', textAlign: 'center', textAlignVertical: 'center',alignSelf: 'stretch'}}>Add a note</Text>
                </Button>
              </View>
                          
            }
            
            
          </View>
          
        </View>
        </Content>
        
    );
  }
}
