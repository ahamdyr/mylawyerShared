import { STATUS_BAR_HEIGHT, WIDTH, MAIN_COLOR, HEIGHT } from '../../Components/Constants'
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputStyle: {
    marginTop: 17,
    marginBottom: 22,
    fontFamily: "Lato-Regular",
    fontSize: 24,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: 'center',
    width: WIDTH,
    color: "#0b7f7c"
  },
  greenTop: {
    width: WIDTH,
    height: (HEIGHT/4) - (50 + STATUS_BAR_HEIGHT), 
    backgroundColor: MAIN_COLOR,
  },
  editBtn: {
    marginTop: 22,
    alignSelf: 'center',
    width: 158,
    height: 44,
    backgroundColor: "rgba(0, 0, 0, 0)",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: MAIN_COLOR,    
  },  
  editText: {
    fontFamily: "NunitoSans-Bold",
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: "center",
    color: MAIN_COLOR
  },
  labelStyle: {
    marginTop: 23,
    fontFamily: "NunitoSans-SemiBold",
    fontSize: 12,
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: 0,
    color: "#0d0d0d"
  },
  line: {
    width: WIDTH - 64,
    height: 1,
    opacity: 0.26,
    backgroundColor: "#002e2c"
  },
  name: {
    //marginTop: 50,    
    marginBottom: 10,
    fontFamily: "NunitoSans-Regular",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#454546"
  },
  resetBtn: {
    width: 160,
    height: 48,
    borderRadius: 5,
    backgroundColor: MAIN_COLOR,
    shadowColor: "rgba(11, 127, 124, 0.25)",
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    elevation: 3,
  },
  resetText: {
    fontFamily: "NunitoSans-Bold",
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: "center",
    color: 'white'
  },
  deleteBtn: {
    width: 160,
    height: 48,
    backgroundColor: 'transparent',
    shadowColor: "rgba(11, 127, 124, 0.25)",
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    elevation: 3,
  },
  deleteText: {
    fontFamily: "NunitoSans-Regular",
    fontSize: 17,
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#fa0b0b"
  },
  camera:{
    width: 32,
    height: 28,
  },
  editContainer:{
    flex: 1,
    marginTop: 10,
    width: WIDTH,
    alignItems: 'center',
  },
  cancel: {
    marginRight: 28,
    fontFamily: "Lato-Regular",
    fontSize: 17,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0.45,
    color: "#0b7f7c"
  },
  headerStyle: {
    flexDirection: 'row',
    height: STATUS_BAR_HEIGHT + 50,
    width: WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: MAIN_COLOR,
    paddingTop: STATUS_BAR_HEIGHT,
  },
  BackIcon: {
    position: 'absolute',
    top: STATUS_BAR_HEIGHT,
    left: 0
  },
  headerTextStyle: {
    fontFamily: "NunitoSans-Bold",
    fontSize: 18,
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff"
  },
  saveText: {
    fontFamily: "Lato-Regular",
    fontSize: 13.8,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff"
  },
  saveBtn: {
    //position: 'absolute',
    //bottom: 22,
    alignSelf: 'center',
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
  container: {
    flex: 1,
    //backgroundColor: "#f6f6f6",
    //alignItems: 'center',
    //justifyContent: 'space-between',
    //paddingTop: STATUS_BAR_HEIGHT,
    //paddingBottom: 22
  },
  inputsContainer:{
    //marginVertical: 22,
    marginHorizontal: 32,
    //marginBottom: 75,
    //backgroundColor: "blue",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  profileImage: {
    marginTop: -88,
    alignSelf: 'center',
    width: 120,
    height: 120,
    borderRadius: 60
  },
  select: {
    backgroundColor: 'white',
    elevation: 10,
    shadowOpacity: 0.5,
    marginTop: 16
  },
  question: {
    marginTop: 16,
    marginRight: 16,
    marginLeft: 16,
    //height: 450,
    backgroundColor: 'white',
    elevation: 16,
    shadowOpacity: 0.5
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
    alignSelf: 'center',
    position: 'absolute',
    bottom: 24
  }
});