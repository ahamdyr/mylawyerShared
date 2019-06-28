import { StyleSheet } from 'react-native';
import { WIDTH, STATUS_BAR_HEIGHT } from '../../Constants'

export const styles = StyleSheet.create({
  picker: {
    marginLeft: 14.5,
    //width: 200,
    flex: 1,
    height: 50,
    color: '#0b7f7c',
  },
  line:{
    position: 'absolute',
    bottom: 0,
    width: WIDTH,
    height: 1,
    opacity: 0.26,
    backgroundColor: "#a0a0a4"
  },
  modalStyle:{
    position: 'absolute',
    top:  110,
    width: WIDTH,
    backgroundColor: '#f6f6f6'
  },
  container: {
    marginLeft: 14.5,
    width: WIDTH - 40,
    height: 50,
    justifyContent: 'center',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 18
  },
  headerFooterContainer: {
    padding: 10,
    alignItems: 'center'
  },
  clearButton: {
    backgroundColor: 'grey',
    position: 'absolute',
    right: 80,
    borderRadius: 5,
    //marginRight: 10,
    padding: 5
  },
  optionContainer: {
    height: 56,
    width: WIDTH,
    justifyContent: 'center',
  },
  optionInnerContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  box: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  optionText: {
    marginLeft: 15,
    fontFamily: "Lato-Bold",
    fontSize: 16,    
    letterSpacing: 0.4,
    textAlign: "left",
    color: "#131314"
  },  
  pickerItem: {
    marginLeft: 15,
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    letterSpacing: 0.35,
    color: '#0b7f7c',
  },
  selectContainer: {
    width: WIDTH,
    height: 55,
    flexDirection: 'row',
    backgroundColor: '#f6f6f6',
    borderBottomColor: '#d5d5e0',
    borderBottomWidth: 0.5,
    shadowColor: "#00000026",
    shadowOffset: {
      width: 8,
      height: 13.9
    },
    shadowRadius: 40,
    shadowOpacity: 1
  },
  topicIcon: {
    width: 10.5,
    height: 14.5,
    marginLeft: 18.5,
    marginTop: 20
  },
  downArrow: {
    width: 11,
    height: 6,
    position: 'absolute',
    right: 15,
    top: 24
  },
  arrowContain: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 50
  },
  filterText: {
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    letterSpacing: 0.35,
    color: '#0b7f7c',
    marginTop: 20,
    marginLeft: 14.5
  }
})