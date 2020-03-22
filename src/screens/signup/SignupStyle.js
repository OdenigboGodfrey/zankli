import {StyleSheet} from 'react-native';
import {Colours} from './../../utils';

export const Styles = StyleSheet.create({
  topImage: {
    height: 150,
    width: 150,
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    resizeMode: 'contain',
  },
  welcomeText: {
    flex: 1,
    fontSize: 24,
    alignSelf: 'stretch',
    textAlign: 'center',
    color: Colours.primaryTextColor,
  },
  loginText: {
    flex: 1,
    fontSize: 16,
    color: Colours.black,
  },
  textEnd: {
    flex: 1,
    alignSelf: 'stretch',
    textAlign: 'right',
    marginTop: 10,
  },
  inputItem: {
    marginTop: 30,
  },
});
