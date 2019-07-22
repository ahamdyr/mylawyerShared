import { STATUS_BAR_HEIGHT, WIDTH, MAIN_COLOR, HEIGHT } from '../../Components/Constants'
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    marginTop: 21 + STATUS_BAR_HEIGHT,
    fontFamily: "LuxiSerif",
    fontSize: 24.3,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#0b7f7c"
  },
  btn:{
    marginTop: 22,
    marginBottom: 25, 
  },
  textStyle:{
    color: "#fa0b0b"
  },
  line:{
    width: 230,
    height: 1,
    opacity: 0.26,
    backgroundColor: "#a0a0a4"
  },
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    alignItems: 'center',
    //justifyContent: 'center',
  },
  profileImage:{
    width: 80,
    height: 80,
    borderRadius: 40
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
    position: 'absolute',
    bottom: 24
  }
});