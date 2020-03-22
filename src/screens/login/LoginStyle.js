import {StyleSheet, Dimensions} from 'react-native';
import {Colours} from './../../utils';

let ScreenHeight = Dimensions.get('window').height;
let ScreenWidth = Dimensions.get('window').width;

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
    color: Colours.black,
  },
  loginText: {
    flex: 1,
    fontSize: 16,
    color: Colours.black,
  },
  forgotPasswordText: {
    flex: 1,
    alignSelf: 'stretch',
    textAlign: 'right',
    color: Colours.black,
    marginTop: 5,
  },
  backgroundView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colours.white,
  },
  backgroundImage: {
    alignSelf: 'stretch',
    flex: 1,
    paddingRight: 0,
    marginLeft: 0,
    height: ScreenHeight,
    flexDirection: 'row',
    width: '100%',
  },
  inputItem: {
    marginTop: 30,
  },
});
