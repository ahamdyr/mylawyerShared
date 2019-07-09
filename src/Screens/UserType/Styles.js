import { STATUS_BAR_HEIGHT, WIDTH, MAIN_COLOR, HEIGHT } from '../../Components/Constants'
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  transparentContainer:{
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: 290,
    height: 284,
    borderRadius: 12,
    backgroundColor: "#ffffff",
    shadowColor: "#1313143f",
    shadowOffset: {
      width: 0,
      height: 16
    },
    shadowRadius: 32,
    shadowOpacity: 1
  },
  ContinueAs: {
    marginTop: 38.5,
    marginBottom: 38.5,
    alignSelf: 'center',
    fontFamily: "Lato-Light",
    fontSize: 24,
    fontWeight: "300",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#0b7f7c"
  },
  btnContainer:{
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    justifyContent: 'space-between',
  },
  lawyerView:{

  },
  or:{
    marginTop: 20,
    fontFamily: "Lato-Bold",
    fontSize: 28,
    fontWeight: "900",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#0b7f7c"
  },
  userView:{

  },
  btnStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#0b7f7c",
    shadowColor: "#07174b4c",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowRadius: 12,
    shadowOpacity: 1
  },
  name:{
    marginTop: 30,
    fontFamily: "Lato-Bold",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#0b7f7c"
  },
  image:{
    width: 33,
    height: 48
  },
});