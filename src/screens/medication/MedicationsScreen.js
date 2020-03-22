/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Card, CardItem, Text, View, Button} from 'native-base';
import {Styles} from './Medicatioinsstyle';
import {strings as AppStrings} from './../../strings';
import HomePageBox from '../../components/homePageBox';
import {getDay} from '../../utils';

const strings = AppStrings.signupScreen;
const currently_active = {
  _home: 0,
  _offers: 1,
  _wallet: 2,
  _models: 3,
  _gigs: 4,
  _more: 5,
  _request: 6,
};

export default class MedicationsScreen extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    noMeds: true,
  };

  onFooterTabPress(source) {
    this.setState({
      [this.state.prev_source]: false,
      [source]: true,
      prev_source: source,
    });
  }

  getMonday(d) {
    d = new Date(d);
    var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -7 : 0);
    return new Date(d.setDate(diff)).getDay();
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
                  <Text style={{fontSize: 14, textAlign: 'center', paddingTop: 10}}>Add your meds to be reminded on time and track your health</Text>  
                </View>
                
                <Button rounded style={{alignItems: 'center', width: '80%', alignSelf: 'center'}}>
                  <Text style={{ width: '100%', height: '100%', textAlign: 'center', textAlignVertical: 'center',alignSelf: 'stretch'}}>Add a med</Text>
                </Button>
              </View>
                          
            }
            
            
          </View>
          
        </View>
    );
  }
}
