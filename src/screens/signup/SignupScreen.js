import React, {Component} from 'react';
import {
  Header,
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Button,
  View,
  Input,
  Item,
  Icon,
} from 'native-base';
import {Styles} from './SignupStyle.js';
import {strings as AppStrings} from './../../strings';
import {Image} from 'react-native';
import {glamIcon01} from '../../utils.js';

const strings = AppStrings.signupScreenStrings;

class SignupScreen extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    email: '',
    password: '',
    secureTextEntry: true,
  };

  onLoginPress() {
    alert('Login press');
  }

  onSignupPress() {
    if (this.state.password == this.state.confirmPassword) {
      alert('Signup Press');
    } else {
      alert(strings.passwordsNotMatch);
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body style={[Styles.topImage]}>
                <Image source={glamIcon01} style={[Styles.topImage]} />
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Item rounded style={[Styles.inputItem]}>
                  <Icon name="mail" />
                  <Input
                    placeholder={AppStrings.genericStrings.email}
                    onChangeText={text => this.setState({email: text})}
                  />
                </Item>
                <Item rounded style={[Styles.inputItem, {paddingRight: 8}]}>
                  <Icon name="key" />
                  <Input
                    secureTextEntry={this.state.secureTextEntry}
                    placeholder={AppStrings.genericStrings.password}
                    onChangeText={text => this.setState({password: text})}
                  />
                  <Icon
                    name="eye"
                    style={{marginRight: 5}}
                    onPress={() => {
                      this.setState({
                        secureTextEntry: !this.state.secureTextEntry,
                      });
                      setTimeout(() => {
                        this.setState({
                          secureTextEntry: !this.state.secureTextEntry,
                        });
                      }, 1000);
                    }}
                  />
                </Item>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Button block onPress={() => this.onSignupPress()}>
                  <Text>{strings.signup}</Text>
                </Button>
                <Text
                  onPress={() => this.onLoginPress()}
                  style={[Styles.textEnd]}>
                  {AppStrings.signupScreenStrings.login}
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default SignupScreen;
