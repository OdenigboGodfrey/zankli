import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './../screens/login/LoginScreen.js';

const AuthNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(AuthNavigator);
