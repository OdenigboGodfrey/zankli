import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import TabNavigator from './TabNavigation';
import AddMeasurementScreen from '../screens/add_measurement/AddMeasurementScreen';
import ContainerScreen from '../screens/container/ContainerScreen';
import UpdatesScreen from '../screens/updates/UpdatesScreen';
import MedicationsScreen from '../screens/medication/MedicationsScreen';
import MoreScreen from '../screens/more/MoreScreen';
import HomeScreen from '../screens/home/HomeScreen';

//all screens are registered here
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {headerShown: false},
    },
    AddMeasurement: {
      screen: AddMeasurementScreen,
      navigationOptions: {headerShown: false},
    },
    Container: {
      screen: ContainerScreen,
      navigationOptions: {headerShown: false},
    },
    Updates: {
      screen: UpdatesScreen,
      navigationOptions: {headerShown: false},
    },
    Medications: {
      screen: MedicationsScreen,
      navigationOptions: {headerShown: false},
    },
    More: {
      screen: MoreScreen,
      navigationOptions: {headerShown: false},
    },
  },
  {
    initialRouteName: 'Container',
  },
);

export default createAppContainer(AppNavigator);
