import {StyleSheet} from 'react-native'
import { MAIN_COLOR, WIDTH, HEIGHT, STATUS_BAR_HEIGHT } from '../../Components/Constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MAIN_COLOR,
    //justifyContent: 'space-around',
    //paddingVertical: 20,
  },
  formContainer:{
    //marginTop: (HEIGHT / 6),
    //width: WIDTH,
    flex: 1,
    //backgroundColor: 'black',
    paddingTop: 80,
    //justifyContent: 'space-around',
    alignItems: 'center',
  },
  loginTextContainer:{
    width: WIDTH,
    marginTop: (HEIGHT /5) - (STATUS_BAR_HEIGHT + 50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText:{
    fontFamily: 'Lora-Regular',
    color: 'white',
    fontSize: 40,
    textAlign: 'center'
    //marginLeft: 130
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
    position: 'absolute',
    bottom: 20,
    // left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  }
});