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
    alignItems: 'center',
    //justifyContent: 'center',
    width: WIDTH - 45,
    height: HEIGHT - 96,
    borderRadius: 16,
    backgroundColor: "#ffffff",
    shadowColor: "#00000026",
    shadowOffset: {
      width: 8,
      height: 13.9
    },
    shadowRadius: 40,
    shadowOpacity: 1
  },
  imageContainer:{
    alignItems: 'center',
  },
  orderStyle:{
    position: 'absolute',
    top: 21,
    left: -22
  },
  orderTextStyle: {
    fontFamily: "Lato-Bold",
    fontSize: 21.3,
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff"
  },
  lawyerPhoto:{
    width: 140,
    height: 150,
    borderRadius: 8,
    marginTop: 41 
  },
  lawyerData:{
    width: WIDTH,
    height: 50,
    flexDirection: 'row',
    marginTop: 23,
    marginBottom: 30,
    alignItems: 'center',
  },
  nameContainer:{
    justifyContent: 'space-between',
    marginLeft: 50
  },
  nameText: {
    fontFamily: "Lato-Bold",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#131314"
  },
  officeText: {
    fontFamily: "Lato-Regular",
    fontSize: 15,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#8f8f8f"
  },
  ratingStyle:{
    position: 'absolute',
    right: 54.5,    
  },
  starStyle:{
    width: 21,
    height: 21
  },
  askBtnStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 224,
    height: 51.5,
    borderRadius: 26,
    backgroundColor: "#0b7f7c",
    shadowColor: "#1d0e2833",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 16,
    shadowOpacity: 1
  },
  askTextStyle: {
    fontFamily: "Lato-Regular",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff"
  },
  bio: {
    marginTop: 31.5,
    marginBottom: 33.5,
    flex: 1.5,
    marginRight: 35,
    marginLeft: 35,
    // width: WIDTH - 90,
    // height: 100,
    fontFamily: "Lato-Regular",
    fontSize: 16,
    letterSpacing: 0.4,
    textAlign: "center",
    color: "#74747a"
  },
  line: {
    width: WIDTH - 45,
    height: 1,
    backgroundColor: "#d5d5e0"
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontFamily: "Lato-Bold",
    fontSize: 21.5,
    letterSpacing: 0,
    textAlign: "center",
    color: "#007ac4"
  }
});