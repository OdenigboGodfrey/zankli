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
} from 'native-base';
import {Styles} from './LoginStyle';
import {strings as AppStrings} from './../../strings';
import {ImageBackground, Image} from 'react-native';
import {backgroundImage01, glamIcon01, Colours} from '../../utils';

const strings = AppStrings.loginScreenStrings;

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    console.log('props', JSON.stringify(props.navigation.state));
  }

  state = {
    username: '',
    password: '',
  };

  onPressForgotPassword() {
    alert('txt tapped');
  }
  onPressLoginButton() {
    // alert('btn tapped');
    this.props.navigation.navigate('App');
  }
  onPressCreateAccount() {
    alert('create account');
  }

  render() {
    return (
      <View style={[Styles.backgroundView]}>
        <Container
          style={{flex: 1, width: '100%', backgroundColor: 'transparent'}}>
          {/* <Header /> */}
          <Content style={{backgroundColor: 'transparent'}}>
            <Form style={{backgroundColor: 'transparent', borderWidth: 0}}>
              {/* <Card style={{flex: 0,backgroundColor: 'transparent', borderWidth: 5}}> */}
              <CardItem style={{backgroundColor: 'transparent'}}>
                <Body style={[Styles.topImage]}>
                  {/* <Thumbnail source={{uri: 'Image URL'}} /> */}

                  <Image source={glamIcon01} style={[Styles.topImage]} />
                </Body>
              </CardItem>
              <CardItem style={{backgroundColor: 'transparent'}}>
                <Text style={[Styles.welcomeText]}>
                  {strings.loginScreenWelcomeText}
                </Text>
              </CardItem>
              <CardItem style={{backgroundColor: 'transparent'}}>
                <Body>
                  {/* <Text style={[Styles.loginText]}>{strings.loginText}</Text> */}
                  <Item rounded style={[Styles.inputItem]}>
                    <Icon name="mail" style={{color: Colours.black}} />
                    <Input
                      style={{color: Colours.black}}
                      placeholderTextColor={Colours.black}
                      placeholder={AppStrings.genericStrings.username}
                      onChangeText={text => this.setState({username: text})}
                    />
                  </Item>
                  <Item rounded style={[Styles.inputItem]}>
                    <Icon name="key" style={{color: Colours.black}} />
                    <Input
                      style={{color: Colours.black}}
                      placeholderTextColor={Colours.black}
                      placeholder={AppStrings.genericStrings.password}
                    />
                  </Item>

                  <Text
                    onPress={() => this.onPressForgotPassword()}
                    style={[Styles.forgotPasswordText]}>
                    {strings.forgotPassword}
                  </Text>
                </Body>
              </CardItem>
              <CardItem
                style={{
                  flexDirection: 'column',
                  alignSelf: 'stretch',
                  backgroundColor: 'transparent',
                }}>
                <Body>
                  <Button block onPress={() => this.onPressLoginButton()}>
                    <Text>{strings.loginText}</Text>
                  </Button>
                  <Text
                    style={[Styles.forgotPasswordText]}
                    onPress={() => this.onPressCreateAccount()}>
                    {strings.createAccountNow}
                  </Text>
                </Body>
              </CardItem>
              {/* </Card> */}
            </Form>
          </Content>
        </Container>
      </View>
    );
  }
}

export default LoginScreen;
