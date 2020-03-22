import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import AppNavigator from './AppNavigation';
import AuthNavigator from './AuthNavigation';
import ContainerScreen from '../screens/container/ContainerScreen';

const SwitchNavigator = createSwitchNavigator(
  {
    Home: {
      screen: AppNavigator,
    },
    Auth: {
      screen: AuthNavigator,
    },
  },
  {
    initialRouteName: 'Auth',
  },
);

export default createAppContainer(SwitchNavigator);
