import {StyleSheet} from 'react-native'
import { MAIN_COLOR, WIDTH } from '../../Components/Constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MAIN_COLOR,
    //justifyContent: 'space-around',
  },
  loginTextContainer:{
    // position: 'absolute',
    // top: 40,
    // left: 0,
    width: WIDTH,
    //height: 20,
    //backgroundColor: 'black',
    //justifyContent: 'center',
    alignItems: 'center',
  },
  loginText:{
    fontFamily: 'Lora-Regular',
    color: 'white',
    fontSize: 40,
    //marginLeft: 130
  },
  formContainer:{
    flex: 1,
    alignItems: 'center'
  },
  lowerThird: {
    height: 200,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    //marginTop: 20
  },
  Btns: {
    height: 56,
    width: WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // position: 'absolute',
    // bottom: 140,
    //marginTop: 20
  },
  faceBookStyle: {
    backgroundColor: 'rgb(61, 90, 150)'
  },
  googleStyle: {
    backgroundColor: '#fffafa'
  },
  faceBookIconStyle: {
    width: 9,
    height: 20
  },
  googleIconStyle: {
    width: 25,
    height: 25
  },
  termsContainer:{
    // position: 'absolute',
    // //top: 545,
    // left: 0,
    // bottom: 96.5,
    width: WIDTH,
    //height: 20,
    //backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  termsText:{
    fontFamily:'Lato-Light',
    fontSize: 12,
    color: '#fffefe',
  },
  footerText:{
    fontFamily:'Lato-Light',
    fontSize: 16,
    color: '#fefefe',
    textDecorationLine: 'underline'
  },
  footer: {
    width: WIDTH,
    height: 49,
    backgroundColor: "#0b7f7c",
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowOffset: {
      width: 0,
      height: -8
    },
    shadowRadius: 12,
    shadowOpacity: 1,
    elevation: 18,
    //backgroundColor: 'black',
    // position: 'absolute',
    // bottom: 10,
    // left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  }
});