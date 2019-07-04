import {StyleSheet} from 'react-native'
import { MAIN_COLOR, WIDTH } from '../../Components/Constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MAIN_COLOR,
  },
  editContainer:{
    flex: 1,
    //marginTop: 10,
    width: WIDTH,
    alignItems: 'center',
    //backgroundColor: 'blue',
  },
  formContainer:{
    position:'absolute',
    top: 190,
    left: 0,
    bottom: 157.5,
    width: WIDTH,
    //backgroundColor: 'black',
    //justifyContent: 'center',
    alignItems: 'center',
  },
  loginTextContainer:{
    marginTop: 40,
    width: WIDTH,
    //height: 80,
    //backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText:{
    fontFamily: 'Lora-Regular',
    color: 'white',
    fontSize: 40,
    //marginLeft: 130
  },
  Btns: {
    height: 56,
    width: WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 120,
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
    position: 'absolute',
    //top: 545,
    left: 0,
    bottom: 76.5,
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
  footer:{    
    width: WIDTH,
    //backgroundColor: 'black',
    position: 'absolute',
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: 49,
    
  }
});