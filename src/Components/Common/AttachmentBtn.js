import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native';
import {STATUS_BAR_HEIGHT, WIDTH, HEIGHT} from '../Constants'
import DropdownMenu from 'react-native-dropdown-menu';
import { Entypo } from '@expo/vector-icons';
import AttachmentView from './AttachmentView'
import {upArrow, arrow, attachment} from '../../../assets'
export default class AttachmentBtn extends React.PureComponent {
  state={
    isOpened: false
  }
  _toggleAttach = () =>{
    this.setState({
      isOpened: !this.state.isOpened
    })
  }
  render(){
    let {isOpened} = this.state
    return(
      <View>
        <TouchableOpacity 
          style={styles.btnStyle}
          onPress={this._toggleAttach}
        >   
          <View style={[styles.attachContainer,this.props.style]}>        
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

              { isOpened ? 
                  <Image 
                    source={upArrow}
                    style={styles.downArrow}
                  />
                : <Image 
                    source={arrow}
                    style={styles.downArrow}
                  />  
              }           
          </View>         
        </TouchableOpacity>
        {isOpened && <AttachmentView/>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  btnStyle:{
    width: WIDTH,
    height: 52 ,
  },
  attachContainer : {
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
  attachmentIcon:{    
    width:14.5,
    height: 14.5,
    marginLeft: 18,
    //marginTop: 19.5,
    color: '#0b7f7c'    
  },
  downArrow:{
    width:11,
    height: 6.5,
    position:'absolute',
    right:15,
    top:24
  },
  filterText:{
    fontFamily:'Lato-Bold',
    fontSize: 14,
    letterSpacing: 0.35,
    color: '#0b7f7c',
    //  marginTop: 21,
    marginLeft: 11
  }
})