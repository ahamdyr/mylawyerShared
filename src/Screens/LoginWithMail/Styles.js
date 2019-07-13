import {StyleSheet} from 'react-native'
import { MAIN_COLOR, WIDTH } from '../../Components/Constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MAIN_COLOR,
    justifyContent: 'space-around',
    //paddingVertical: 20,
  },
  formContainer:{
    position:'absolute',
    top: 200,
    left: 0,
    bottom: 185,
    width: WIDTH,
    //backgroundColor: 'black',
    //justifyContent: 'center',
    alignItems: 'center',
  },
  loginTextContainer:{
    // position: 'absolute',
    // top: 50,
    // left: 0,
    width: WIDTH,
    //height: 20,
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
  footerText:{
    fontFamily:'Lato-Light',
    fontSize: 16,
    color: '#fefefe',
    textDecorationLine: 'underline'
  },
  footer:{    
    width: WIDTH,
    //backgroundColor: 'black',
    // position: 'absolute',
    // bottom: 20,
    // left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: 49,
    
  }
});