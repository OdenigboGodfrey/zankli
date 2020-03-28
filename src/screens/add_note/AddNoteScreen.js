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
import {Styles} from './AddNoteStyle';
import {strings as AppStrings} from './../../strings';
import HomePageBox from '../../components/homePageBox';
import {getDay, Colours} from '../../utils';
import { ScrollView } from 'react-native';
import { SpinnerButton } from '../../components/SpinnerButton';

const strings = AppStrings.signupScreen;

export default class AddNoteScreen extends Component {
  constructor(props) {
    super(props);
  }

  state = {
      typeSelected: 'General',
      btnClicked: false
  };

  set = (v) => {
      this.setState(v);
  }

  onTypeChange = (text) => {
      console.log('pressed')
      this.set({typeSelected: text});
  }

  onSavePress = () => {
      this.setState({btnClicked: true});
      this.setState({btnClicked: false});
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
                        <Text style={{alignSelf: 'stretch', textAlign: 'center', color: Colours.white, fontSize: 18}}>Add Note</Text>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <View style={[{flexWrap: 'wrap', padding: 0, borderWidth: 0, width: '100%', height: '100%' }]}>
                {/* <View style={{flex:0.2, width: '100%', height: 120, alignSelf: 'stretch'}}></View> */}
                <View style={{flex: 1, backgroundColor: '#eee', width: '100%', paddingRight: 10, paddingTop: 10}}>
                    <Form>
                        <Item style={{backgroundColor: Colours.white}}>
                            <Textarea 
                                placeholder={'Enter Note'}
                                rowSpan={10}
                                style={{ width: '100%' }}
                            />
                        </Item>
                        <Item style={{backgroundColor: Colours.white, height: 50, marginTop: 20, padding: 10}}>
                            <Left>
                                <Text style={{color: '#aaa'}}>Time</Text>
                            </Left>
                            <Right>
                                <Text style={{color: '#aaa'}}>6 Mar 2020 8:54 PM</Text>
                            </Right>
                        </Item>
                        <Item style={{backgroundColor: Colours.white, height: 50, marginTop: 20, padding: 10}}>
                            <Left>
                                <Text style={{color: '#aaa'}}>Type</Text>
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
                        <Item style={{alignSelf: 'center', marginTop: 10}}>
                            {/* <Button
                            rounded
                            style={{width: '80%', alignSelf: 'center'}}
                            >
                                <Text style={{width: '100%', alignSelf: 'center', textAlign: 'center'}}>Save</Text>
                            </Button> */}
                            <SpinnerButton 
                                label={'Save'}
                                rounded={true}
                                style={{width: '80%', alignSelf: 'center'}}
                                btnClicked={this.state.btnClicked}
                                onPress={this.onSavePress}
                            />
                        </Item>
                    </Form>
                </View>
                
                </View>
            </Content>
        </ScrollView>
        
        
    );
  }
}
