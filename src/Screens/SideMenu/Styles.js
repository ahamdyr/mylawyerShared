import { STATUS_BAR_HEIGHT, WIDTH, MAIN_COLOR, HEIGHT } from '../../Components/Constants'
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 44.5 + STATUS_BAR_HEIGHT,
    paddingBottom: 24  
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
    width: 16.5,
    height: 16.5,
    borderRadius: 0.8,
    position: 'absolute',
    top: 20,
    right: 16,
    left: 90
  }
});