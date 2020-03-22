/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Card, CardItem, Text, View, Button} from 'native-base';
import {Styles} from './UpdatesStyle';
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

export default class UpdatesScreen extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    noUpdate: true,
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
      <View style={[{flexWrap: 'wrap', padding: 0, borderWidth: 0, width: '100%', height: '100%'}]}>
          {/* <View style={{flex: 1}}>
            {
              this.state.noUpdate &&
              <View style={{flex: 1, width: '100%', height: '100%', marginRight: 10}}>
                <View style={{  height: '60%', justifyContent: 'center', padding: 20, backgroundColor: 'red'}}>
                  <Text style={{flexWrap: 'wrap',alignSelf: 'center', width: '100%', fontWeight: 'bold', marginLeft: 10, marginRight: 10, textAlignVertical: 'center'}}>Nothing to show now. We will be sure to keep you posted!</Text>
                  <Text style={{fontSize: 14, textAlign: 'center', paddingTop: 10}}>We regularly update this section with relevant healthnew, med
                  information and tips about how to use the app</Text>  
                </View>
                
                <Button rounded style={{alignItems: 'center', width: '80%', alignSelf: 'center'}}>
                  <Text style={{ width: '100%', height: '100%', textAlign: 'center', textAlignVertical: 'center',alignSelf: 'stretch'}}>Add a med</Text>
                </Button>
              </View>
                          
            }
            
            
          </View> */}
          <View style={{height: '100%', width: '100%'}}>
            {
              this.state.noUpdate &&
              <View style={{width: '100%', height: '100%'}}>
                <View style={{  height: '100%', justifyContent: 'center', padding: 20}}>
                  <Text style={{flexDirection: 'column',flexWrap: 'wrap',alignSelf: 'center', width: '100%', fontWeight: 'bold', marginLeft: 10, marginRight: 10, textAlignVertical: 'center'}}>Nothing to show now. We will be sure to keep you posted!</Text>
                  <Text style={{fontSize: 14,justifyContent: 'center', paddingTop: 10}}>We regularly update this section with relevant healthnew, med
                  information and tips about how to use the app</Text>  
                </View>
              </View>
            }

          </View>
          
        </View>
    );
  }
}
