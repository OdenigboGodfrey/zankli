import { StyleSheet, Dimensions } from "react-native"
import { Colors } from "./../../utils";

let ScreenHeight = Dimensions.get("window").height - 22;
let ScreenWidth = Dimensions.get("window").width;

export const Styles = StyleSheet.create({
    backgroundView: {
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0,  
        alignItems: 'center', 
        // padding: 20
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
    topImage:{
        height: 150,
        width: 150,
        alignSelf: 'center',
        resizeMode: 'contain'
        
    },
    btnGoogle: {
        backgroundColor: Colors.firebrick
    },
    btnFacebook: {
        // backgroundColor: 'blue'
    },
    btnInstagram: {
        backgroundColor: Colors.white
    },
    btn: {
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'row',
        paddingLeft:20,
        justifyContent: 'center'
    },
    btnIcon: {
        width: 25,
        height: 25
    },
    text01: {
        fontSize: 12,
        fontWeight: '200',
        color: Colors.gray
    },
    text02: {
        fontSize: 14,
        fontWeight: '400',
        color: Colors.white
    },
    text03: {
        textAlign: 'center',
        color: Colors.white, 
        flex: 1, 
        fontWeight: 'bold',
    },
    transparent: {
        backgroundColor: 'transparent'
    },
    TermsOfServiceView: {
        flexDirection: 'row', 
        justifyContent: 'center',
        marginBottom: 5
    }
});