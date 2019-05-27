import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { STATUS_BAR_HEIGHT, WIDTH, HEIGHT } from '../Constants'
import DropdownMenu from 'react-native-dropdown-menu';
import { Entypo } from '@expo/vector-icons';
import AttachmentList from './AttachmentList'
import { upArrow, arrow, attachment } from '../../../assets'
export default class Attachments extends React.PureComponent {

  render() {
    var {
      attachs,
      delQuestionDoc,
      delQuestionImg
    } = this.props
    return (
      attachs.length ?
        <View style={this.props.style} >
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.btnStyle]}
          >
            <View style={[styles.attachContainer]}>
              <Image
                source={attachment}
                style={styles.attachmentIcon}
              />
              {/* <Entypo
                name="attachment"
                style={styles.attachmentIcon}
              /> */}
              <Text style={styles.filterText}>
                ATTACHMENTS
              </Text>

              <Image
                source={arrow}
                style={styles.downArrow}
              />
            </View>
          </TouchableOpacity>
          
              <AttachmentList
                attachs={attachs}
                delQuestionDoc={(doc) => delQuestionDoc(doc)}
                delQuestionImg={(img) => delQuestionImg(img)}

              />
            
        </View>
        : null
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: 281.5,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    borderBottomWidth: 0.5,
    borderBottomColor: '#d5d5e0'
  },
  filesContainer: {
    height: 240,
    marginLeft: 16,
    marginTop: 24
  },
  btnStyle: {
    width: WIDTH,
    height: 52,
  },
  attachContainer: {
    // width: WIDTH,
    // height: 52 ,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    elevation: 20,
    shadowRadius: 20,
    //shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOpacity: 0.3,
  },
  attachmentIcon: {
    width: 14.5,
    height: 14.5,
    marginLeft: 18,
    //marginTop: 19.5,
    //color: '#0b7f7c'    
  },
  downArrow: {
    width: 11,
    height: 6.5,
    position: 'absolute',
    right: 15,
    top: 24
  },
  filterText: {
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    letterSpacing: 0.35,
    color: '#0b7f7c',
    //  marginTop: 21,
    marginLeft: 11
  }
})