import { StyleSheet } from 'react-native';
import { WIDTH } from '../../Constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    // marginLeft: 14.5,
    justifyContent: 'center',
    flexDirection: 'column'
  },
  selectContainer: {
    width: WIDTH,
    height: 55,
    flexDirection: 'row',
    backgroundColor: '#f6f6f6',
    borderBottomColor: '#d5d5e0',
    borderBottomWidth: 0.5
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
  filterText: {
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    letterSpacing: 0.35,
    color: '#0b7f7c',
    marginTop: 20,
    marginLeft: 14.5
  }
})