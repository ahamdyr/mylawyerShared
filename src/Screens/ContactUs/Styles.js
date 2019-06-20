import { STATUS_BAR_HEIGHT, WIDTH, MAIN_COLOR, HEIGHT } from '../../Components/Constants'
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  btnStyle:{
    position: 'absolute',
    alignSelf: 'center',
    bottom: 22,
    width: 224,
    height: 51.5,
    borderRadius: 25.8,
    backgroundColor: "#0b7f7c",
    shadowColor: "#1d0e2833",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowRadius: 32,
    shadowOpacity: 1
  },
  textStyle:{
    fontFamily: "Lato-Regular",
    fontSize: 13.8,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff"
  },
  container: {
    flex: 1,
    //width: WIDTH,  
    backgroundColor: 'rgb(246, 246, 246)',
    flexDirection: 'column',
    //alignItems: 'center',
    // justifyContent: 'flex-start',
    marginTop: STATUS_BAR_HEIGHT
  },
  select: {
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: "#00000026",
    shadowOffset: {
      width: 8,
      height: 13.9
    },
    shadowRadius: 40,
    shadowOpacity: 1,
    marginTop: 16
  },
  question: {
    marginTop: 16,
    marginRight: 16,
    marginLeft: 16,
    //height: 450,
    backgroundColor: 'white',
    elevation: 16,
    shadowColor: "#0000000c",
    shadowOffset: {
      width: 4,
      height: 6.9
    },
    shadowRadius: 32,
    shadowOpacity: 1
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: WIDTH,
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 55,
    alignItems: 'center',
    justifyContent: 'space-around',
    elevation: 12,
    shadowOpacity: 0.8,
    shadowOffset: {
      height: -8,
      width: 0
    },
  },
  topic: {
    paddingBottom: 21,
    borderBottomWidth: 0.5,
    borderBottomColor: '#d5d5e0'
  },
  Attachments: {
    marginTop: 22.5,
    marginBottom: 31,
  },
  answered: {
    marginLeft: 16,
    marginTop: 31,
    marginBottom: 17,
  },
  textConatin: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  answer: {
    fontFamily: 'Cairo-Regular',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.11,
    color: '#131314',
    marginHorizontal: 16
  },
  closeIcon: {
    width: 16.5,
    height: 16.5,
    borderRadius: 0.8,
    position: 'absolute',
    top: 20,
    right: 16,
    left: 90
  },
  partial: {
    marginBottom: 10
  },
  full: {
    marginBottom: 55
  },
  questionContainer: {
    flex: 1,
    marginTop: 16,
    marginRight: 16,
    marginLeft: 16,
    //height: 450,
    backgroundColor: 'white',
    elevation: 16,
    shadowColor: "#0000000c",
    shadowOffset: {
      width: 4,
      height: 6.9
    },
    shadowRadius: 32,
    shadowOpacity: 1,
    borderRadius: 10
  },
  title: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    width: WIDTH - 72,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    fontFamily: 'Lato-Bold',
    letterSpacing: 0.4,
    fontSize: 16,
    color: MAIN_COLOR
  },
  body: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20
  },
  bodyText: {
    // flex: 1,
    flexWrap: 'wrap',
    fontFamily: 'Lato-Regular',
    letterSpacing: 0.4,
    fontSize: 16,
    color: '#74747a',
    alignSelf: 'center',
    width: 200,
    // marginTop: 10,
    // marginBottom: 20
  },
  seperator: {
    borderBottomColor: '#d5d5e0',
    borderBottomWidth: 1,
    alignSelf: 'center',
    //opacity: 0.26,
    width: WIDTH - 80
  },
  keyBad: {
    //marginTop: -30
  }
});